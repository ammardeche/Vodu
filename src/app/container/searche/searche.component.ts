import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searche',
  templateUrl: './searche.component.html',
  styleUrls: ['./searche.component.css']
})
export class SearcheComponent {


  @ViewChild('searchInput') searchInput! : HTMLInputElement;



  
  
}
