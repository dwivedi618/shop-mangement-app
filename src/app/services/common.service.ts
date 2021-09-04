import { items } from './../fakedata/productData';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }





  //******************* */ HTTP IMPLEMENTATION*******************
  // yourFunction(formData) {
  //   return this.http.post<any>(`${environment.apiUrl}/v1/student`, formData)
  // }

  getItemForSale(): Observable<any>{

    return items
  }
  
 

}
