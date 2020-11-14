import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './header/product';
@Injectable({
  providedIn: 'root'
})
export class CamDataService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get<any>("http://localhost:3000/data");
    // .toPromise()
    // .then(res => <Product[]>res.data)
    // .then(data => { return data;})
  }

}
