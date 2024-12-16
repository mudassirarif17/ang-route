import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone : true
})
export class CardComponent implements OnInit{
  router = inject(Router);

  view(id: number){
    console.log("View")
    this.router.navigateByUrl(`/product/${id}`)
  }

  httpClient = inject(HttpClient);

  product : any[] = [];

  ngOnInit() : void{
    this.fetchData();
  }

  fetchData(){
    this.httpClient.get('https://dummyjson.com/products').subscribe((data:any)=>{
      // console.log(data.products);
      this.product = data.products;
    },
    (error=>{
      console.log(error)
    })
  );

  }
}
