import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

    studentForm : FormGroup = new FormGroup({
      firstName : new FormControl('' , [Validators.required , Validators.minLength(4)]),
      lastName : new FormControl('' , [Validators.required , Validators.minLength(4)]),
      userName : new FormControl("some@123" , Validators.email),
      city : new FormControl('' , [Validators.required , Validators.minLength(4)]),
      state : new FormControl('' , [Validators.required , Validators.minLength(4)]),
      zipCode : new FormControl('' , [Validators.required , Validators.minLength(4)]),
    })

    formValue : any ;

    onSave(){
      this.formValue = this.studentForm.value;
    }
    
    
}
