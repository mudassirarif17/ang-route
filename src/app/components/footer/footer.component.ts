import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    @Input() myfootTitle : any;

    @Output() dataEmitter = new EventEmitter<string>();

    sendData(){
      const data = "Data from Footer Component";
      this.dataEmitter.emit(data);
    }

}
