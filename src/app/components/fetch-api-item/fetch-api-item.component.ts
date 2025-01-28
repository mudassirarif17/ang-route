import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fetch-api-item',
  imports: [],
  templateUrl: './fetch-api-item.component.html',
  styleUrl: './fetch-api-item.component.css'
})
export class FetchApiItemComponent implements OnInit {
  id : any ;
  data : any = {};

  httpClient = inject(HttpClient);

  constructor(private activatedRoute : ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.httpClient.get('https://dummyjson.com/products/'+this.id).subscribe((data : any)=>{
      console.log(data);
      this.data = data;
    })
  }


}
