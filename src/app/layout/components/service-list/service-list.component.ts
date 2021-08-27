
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  
  typesOfService = [
    { id : 1 , value : 'garments', viewValue : 'Garments', imgUrl:'../../../../assets/images/pexels-markus-winkler-3812433.jpg'},
    { id : 2 , value : 'jwellary', viewValue : 'Jwellary' , imgUrl:'../../../../assets/images/pexels-pixabay-248077.jpg'},

];
  constructor(
    private dialogRef : MatDialogRef<ServiceListComponent>
  ) { }

  ngOnInit(): void {
  }

  selectServiceType(service){
    this.dialogRef.close({data : service ,status : 0});
  }

}
