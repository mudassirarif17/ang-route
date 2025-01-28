import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  imports: [CommonModule],
  templateUrl: './builtin-pipes.component.html',
  styleUrl: './builtin-pipes.component.css'
})
export class BuiltinPipesComponent {
  today : Date = new Date();
  price : number = 1234.5678;
  percentage : number = 0.875;
  message : string = "Hello Maddy";
  user = {name : 'Mushtaq' , age : 250 };
  items : string[] = ['React' , 'Next' , 'Vue' , 'Angular'];
}
