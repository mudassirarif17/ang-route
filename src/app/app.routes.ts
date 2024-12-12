import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailedComponent } from './components/product-detailed/product-detailed.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "products",
        component : ProductComponent
    },
    {
        path : "product/:id",
        component : ProductDetailedComponent
    }
];
