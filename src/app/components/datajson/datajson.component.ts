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
    id : any;

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

    updateUser(id : any , user : {name : string ; email : string}) : Observable<any>{
      return this.httpClient.put('http://localhost:3000/users/'+id , user)
    }

    deleteUser(id : any) : Observable<any>{
      return this.httpClient.delete('http://localhost:3000/users/'+id)
    }

    onDelete(id : any){
      let per = confirm("Are You Sure ?")
      if(per){
        this.deleteUser(id).subscribe({
          next : () => {
              this.response = "User Deleted SuccessFully";
              this.fetchData();
          }, 
          error : (err) => {
            this.response = "Error Deleting User "+err.message;
          }
        });
      }
    }

    onEdit(id: string) {
      this.httpClient.get<any>(`http://localhost:3000/users/${id}`).subscribe((data) => {
          this.studentForm.patchValue({
            name: data.name,
            email: data.email,
          });
    
          const addBtn = document.getElementById("add") as HTMLButtonElement;
          const updateBtn = document.getElementById("update") as HTMLButtonElement;
    
          if (addBtn && updateBtn) {
            addBtn.style.display = "none";
            updateBtn.classList.remove('d-none');
          }
  
          this.id = data.id;
        },
        (error) => {
          console.error("Error fetching user data:", error);
        }
      );
    }

    onUpdate(){
      if(this.studentForm.controls['name'].value == '' || this.studentForm.controls['email'].value == ''){
          alert("All fields are required");
      }
      else{
        this.updateUser(this.id , this.studentForm.value).subscribe({
          next : () => {
              this.response = "User Updated SuccessFully";
              this.studentForm.reset();
              this.fetchData();
              const addBtn = document.getElementById("add") as HTMLButtonElement;
              const updateBtn = document.getElementById("update") as HTMLButtonElement;
              addBtn.style.display = "";
              updateBtn.classList.add('d-none');
          }, 
          error : (err) => {
            this.response = "Error Updating User "+err.message;
          }
        });
      }
    }

}
