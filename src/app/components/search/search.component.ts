import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  

  // inputChange(event:any){
  //   console.log("Input Change");
  // }

  // onTyping(event:any){
  //   console.log("On Typing" , event.target.value)
  // }



}
function Output(): (target: SearchComponent, propertyKey: "search") => void {
  throw new Error('Function not implemented.');
}

