import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailedComponent } from './components/product-detailed/product-detailed.component';
import { BuiltinPipesComponent } from './components/builtin-pipes/builtin-pipes.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ServcompComponent } from './components/servcomp/servcomp.component';
import { FetchApiComponent } from './components/fetch-api/fetch-api.component';
import { DatajsonComponent } from './components/datajson/datajson.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FetchApiComponent , DatajsonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-route';

  navTitle = "Daraz";
  footerTitle = "Ali Baba khan"

  receivedData : string = '';
  receivedDataFromFooter : string = '';
  receivedText : string = '';

  receiveData (data : string) {
    this.receivedData = data; 
  }

  receiveDataFromFooter(data : string){
    this.receivedDataFromFooter = data;
  }
  
  receiveText(data : string){
    this.receivedText = data;
  }

  

  

}
