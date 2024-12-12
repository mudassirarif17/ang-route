import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailedComponent } from './components/product-detailed/product-detailed.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , FooterComponent , HomeComponent , ProductComponent , ProductDetailedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-route';
}
