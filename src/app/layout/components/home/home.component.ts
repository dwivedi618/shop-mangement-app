import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typesOfService = [
    { id : 1 , value : 'garments', viewValue : 'Garments', imgUrl:'assets/images/pexels-markus-winkler-3812433.jpg'},
    { id : 2 , value : 'jwellary', viewValue : 'Jwellary' , imgUrl:'assets/images/pexels-pixabay-248077.jpg'},

];
  constructor(private dialog : MatDialog,private router : Router) { }

  ngOnInit(): void {
    // this.checkServiceList()
  }

  selectServiceType(service){
    localStorage.setItem('serviceType', JSON.stringify(service.value));
    this.router.navigate(['dashboard']);
  }
  checkServiceList() {
    const data = {};
    const dialogRef = this.dialog.open(ServiceListComponent, {
      
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      disableClose : true,
      data: data,
    });
  }

}
