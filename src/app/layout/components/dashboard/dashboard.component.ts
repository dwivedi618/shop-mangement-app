import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  daysofweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
  month =['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  today = new Date();
  daytoday = this.today.getDay();
  clockInterval : any
  
  constructor() { }

  ngOnInit(): void {
console.log(this.daytoday)

  this.clockInterval = setInterval(this.clock,1000);
  }
  clock(){
    // setting up my 
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = h<11 ? 'AM': 'PM';
    let daytoday = today.getDay();
    let date = today.getDate();
    let mon = today.getMonth();
    let year = today.getFullYear();

    // adding leading zeros to them
    h = h<10? 0+h: h;
    m = m<10? 0+m: m;
    s = s<10? 0+s: s;

    // writing it down in the document
    document.getElementById('hours').innerHTML = h as unknown as string;
    document.getElementById('min').innerHTML = m as unknown as string;
    document.getElementById('sec').innerHTML = s as unknown as string;
    document.getElementById('time').innerHTML = day;
  
}

ngOnDestroy(){
  clearInterval(this.clockInterval);
}
  
}
