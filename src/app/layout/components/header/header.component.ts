import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFullScreen = true;
  serviceType: any;
  constructor() { }

  ngOnInit(): void {
    let service = localStorage.getItem('serviceType')
    this.serviceType = JSON.parse(service) ;
  }

}
