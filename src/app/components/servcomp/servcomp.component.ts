import { Component } from '@angular/core';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-servcomp',
  imports: [],
  templateUrl: './servcomp.component.html',
  styleUrl: './servcomp.component.css'
})
export class ServcompComponent {

  constructor(private logger : LoggerService){
    
  }

  logMessage() : void {
    this.logger.log('This is Log Message');
  }

  warnMessage() : void {
    this.logger.warn('This is Warn Message');
  }

  errorMessage() : void {
    this.logger.error('This is Error Message');
  }

  


}
