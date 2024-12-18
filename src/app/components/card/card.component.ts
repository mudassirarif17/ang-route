import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
})
export class CardComponent implements OnInit {
  router = inject(Router);
  query: string = '';

  view(id: number) {
    console.log('View');
    this.router.navigateByUrl(`/product/${id}`);
  }

  httpClient = inject(HttpClient);

  product: any[] = [];
  filterproduct: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('https://dummyjson.com/products').subscribe(
      (data: any) => {
        this.product = data.products;
        this.filterproduct = [...this.product]; // Initialize filtered products
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTyping(event: any) {
    this.query = event.target.value.toLowerCase();
    this.filterproduct = this.product.filter((item) =>
      item.title.toLowerCase().includes(this.query) // Filter by `title` or relevant property
    );
    console.log('Filtered Products:', this.filterproduct);
  }
}
