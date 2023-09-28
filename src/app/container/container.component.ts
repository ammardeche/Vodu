import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { ProdServiceService } from '../services/prod-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  products : IProduct[] =[];
  categories : string[] = 
  [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]
  
  constructor(private http :HttpClient , private prodService : ProdServiceService){}

  ngOnInit( ){
      console.log('ngOnInit');
      this.getAllProducts();
  }

  getAllProducts(){
      this.prodService.getProducts().subscribe((res)=>{
        this.products = res; 
        console.log(this.products);
      }); 
  }
}
