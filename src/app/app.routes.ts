import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TestComponent } from './test/test.component';


export const routes: Routes = [
    {path: 'product-details-component', component: ProductDetailsComponent},
    {path: 'products-list-component', component: ProductsListComponent},
    {path: 'test-component', component: TestComponent}
];
