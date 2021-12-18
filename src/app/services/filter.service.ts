import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterQuery = new Subject(); 
  setData = (data)=>{this.filterQuery.next(data)};
  getData = ()=>{return this.filterQuery.asObservable()};
}