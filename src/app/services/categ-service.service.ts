import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategServiceService {

  url : string = 'https://fakestoreapi.com/products/categories'
  constructor( private http : HttpClient ) { }

  GetCategories(){
    this.http.get<Category>(this.url); 
  }
}
