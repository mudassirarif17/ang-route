import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule , SearchComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  router = inject(Router);
  
  products = [
    {
      "id" : "1",
      "name" : "Red Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 1000,
      "sprice" : 2000,
      "dis" : "50%",
      "image" : "https://cdn.pixabay.com/photo/2013/07/12/15/34/shirt-150087_960_720.png"
    },
    {
      "id" : "2",
      "name" : "Blue Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%",
      "image" : "https://cdn.pixabay.com/photo/2012/04/26/14/33/t-shirt-42654_960_720.png"
    },
    {
      "id" : "3",
      "name" : "Gray Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%",
      "image" : "https://cdn.pixabay.com/photo/2013/07/12/18/22/t-shirt-153368_1280.png"
    },
    {
      "id" : "4",
      "name" : "Yellow Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 8000,
      "sprice" : 1600,
      "dis" : "50%",
      "image" : "https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078_1280.png"
    },
    {
      "id" : "5",
      "name" : "Brown Polo T-Shirt",
      "desc" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, vel!",
      "cprice" : 800,
      "sprice" : 1600,
      "dis" : "50%",
      "image" : "https://cdn.pixabay.com/photo/2014/04/02/14/06/t-shirt-306168_960_720.png"
    }
];

filterp[] : any = [];

  view(){
    console.log("View")
    this.router.navigateByUrl("/product/3")
  }

  inputChange(event:any){
    console.log("Input Change");
  }

  onTyping(event:any){
    console.log("On Typing" , event.target.value)
  }
}
