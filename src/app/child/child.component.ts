import { Component, Inject, Input, inject } from '@angular/core';
import { IData } from '../Models/data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Input({required:true})  data? : IData ;




}
