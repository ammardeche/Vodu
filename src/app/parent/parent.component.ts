import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { IData } from '../Models/data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  data: IData[] = [];

  constructor(private http: HttpClient, private dataServ: DataServiceService) {
    this.getData();
  }


  getData() {
    this.dataServ.GetData().subscribe((res) => {
      this.data = res.data;
      console.log('Server response: ', res);
      console.log('Data caught: ', this.data);
    })


  }

}
