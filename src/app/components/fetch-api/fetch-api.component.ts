import { style } from '@angular/animations';
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
    modetext : string = "Enable Dark Mode"
    mode : boolean = false;


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

    modeChange(){
      if(this.mode){
        this.modetext = "Enable Dark Mode";
        this.mode = false;
        document.body.style.backgroundColor = "white";
        document.getElementsByTagName('h1')[0].style.color = "black";
        document.getElementsByTagName('label')[0].style.color = "black";
        for(let i : number = 0; i <= this.fData.length; i++){
          document.getElementsByClassName('card')[i].classList.remove('bg-dark');
          document.getElementsByTagName('h5')[i].style.color = "black";
          document.getElementsByTagName('p')[i].style.color = "black";
        }
      }else{
        this.modetext = "Enable Light Mode"
        this.mode = true;
        document.body.style.backgroundColor = "black";
        document.getElementsByTagName('h1')[0].style.color = "white";
        document.getElementsByTagName('label')[0].style.color = "white";
        for(let i : number = 0; i <= this.fData.length; i++){
          document.getElementsByClassName('card')[i].classList.add('bg-dark')
          document.getElementsByTagName('h5')[i].style.color = "white";
          document.getElementsByTagName('p')[i].style.color = "white";
        }
      }
    }

}
