import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailedComponent } from './components/product-detailed/product-detailed.component';
import { CardComponent } from './components/card/card.component';
import { FetchApiComponent } from './components/fetch-api/fetch-api.component';
import { FetchApiItemComponent } from './components/fetch-api-item/fetch-api-item.component';

export const routes: Routes = [
    {
        path : "",
        component : FetchApiComponent
    },
    {
        path : "fetch/:id",
        component : FetchApiItemComponent
    },
    {
        path : "products",
        component : ProductComponent
    },
    {
        path : "product/:id",
        component : ProductDetailedComponent
    },
    {
        path : "card",
        component : CardComponent
    }
];
