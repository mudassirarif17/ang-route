import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  router = inject(Router);
  
  view(){
    console.log("View")
    this.router.navigateByUrl("/product/3")
  }
}
