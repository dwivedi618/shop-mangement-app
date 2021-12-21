import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatedPathService {
  private activatedPath = new Subject()
  setData = (data)=>{ this.activatedPath.next(data)}
  getData = ()=>{ return this.activatedPath.asObservable()}

}
