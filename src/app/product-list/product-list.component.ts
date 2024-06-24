import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent,CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


   products = [fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))];

}
