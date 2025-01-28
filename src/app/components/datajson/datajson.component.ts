import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datajson',
  imports: [ReactiveFormsModule],
  templateUrl: './datajson.component.html',
  styleUrl: './datajson.component.css'
})
export class DatajsonComponent implements OnInit {

    data : any = [];
    formVal : any;
    apiURL : string = 'http://localhost:3000/users';
    response : string | null = null;


    studentForm : FormGroup = new FormGroup({
      name : new FormControl(''  , [Validators.required , Validators.minLength(3)]),
      email : new FormControl('' , [Validators.required , Validators.email])
    })

    httpClient = inject(HttpClient);

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData(){
        this.httpClient.get('http://localhost:3000/users').subscribe((data : any) => {
          console.log(data)
          this.data = data;
        })
    }

    onSubmit(event : any){
      event.preventDefault();
      this.formVal = this.studentForm.value;
      console.log(this.formVal)
      this.addUser(this.studentForm.value).subscribe({
        next : () => {
            this.response = "User Added SuccessFully";
            this.studentForm.reset();
            this.fetchData();
        }, 
        error : (err) => {
          this.response = "Error Adding User "+err.message;
        }
      });

    }

    addUser(user : {name : string ; email : string}) : Observable<any>{
        return this.httpClient.post(this.apiURL , user)
    }

}
