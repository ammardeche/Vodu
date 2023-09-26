import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData, IResponse } from '../Models/data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {




  constructor(private http:HttpClient) {

  }

  GetData(){
    return this.http.get<IResponse<IData[]>>('https://as1.aximusapi.net/api/Vodu/GetSignals?pTimeFrame=1440');
  }

}
