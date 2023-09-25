import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../Models/data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  
  
  constructor(private http:HttpClient) { 

  }

  GetData(){
    return this.http.get<IData[]>('https://as1.aximusapi.net/api/Vodu/GetSignals?pTimeFrame=1440&fbclid=IwAR3QgLJgmYL8Q6e1CGJ_2g8qVVheAGegmk4JYRnA33lLt7qsQ1XM202WoDQ');
  }

}
