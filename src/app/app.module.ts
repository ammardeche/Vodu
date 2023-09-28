import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { ProductsComponent } from './container/products/products.component';
import { CategoriesComponent } from './container/categories/categories.component';
import { SearcheComponent } from './container/searche/searche.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductsComponent,
    CategoriesComponent,
    SearcheComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
