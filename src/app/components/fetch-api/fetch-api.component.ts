import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-api',
  imports: [],
  templateUrl: './fetch-api.component.html',
  styleUrl: './fetch-api.component.css'
})
export class FetchApiComponent implements OnInit {
    data : any = [];
    fData : any = [];
    query : any ;


    httpClient = inject(HttpClient);

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData(){
      this.httpClient.get('https://dummyjson.com/products').subscribe((data : any)=>{
        console.log(data);
        this.data = data.products;
        this.fData = this.data;
      })
    }

    filterData(event : any){
      this.query = event.target.value.toLowerCase();
      console.log(this.query)
      this.fData = this.data.filter((data : any)=>(data.title.toLowerCase().includes(this.query)));   
    }

}
