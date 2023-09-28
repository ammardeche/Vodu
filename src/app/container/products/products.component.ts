import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 
  item = this.product;
  @Input() product? : IProduct ; 
 
 
}
