import { Component, OnInit , inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpClientModule } from '@angular/common/http';

interface myinf{
  id: number, 
  title: string, 
}

@Component({
  selector: 'app-product-detailed',
  templateUrl: './product-detailed.component.html',
  imports: [HttpClientModule],
  styleUrls: ['./product-detailed.component.css'], // Corrected styleUrls
})

export class ProductDetailedComponent implements OnInit {
  product : any[] = [];

  productId: string | null = null; // Declare productId
  httpClient = inject(HttpClient);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    // Observable approach (agar route change hote hote update chahiye)
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });

    this.fetchData(this.productId);
  }

  fetchData(productId : any){
    this.httpClient.get(`https://dummyjson.com/products/${productId}`).subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    },
    ((error: any)=>{
      console.log(error)
    })
  );
}

}
