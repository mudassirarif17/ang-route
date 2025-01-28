import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  @Input() myNavTitle : any ;

  @Output() dataEmitter = new EventEmitter<string>();
  @Output() myDataEmitter = new EventEmitter<string>();


  sendData(){
    const data = "Hello from child component";
    this.dataEmitter.emit(data);
  }

  onInputChange(event : any){
    this.myDataEmitter.emit(event.target.value);
  }

}
