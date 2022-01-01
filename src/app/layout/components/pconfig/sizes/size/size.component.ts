import { DefinedSizes } from '../../../../../fakedata/sizes';

import { IPCService } from '../../../../../services/ipc.service';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { table } from 'console';
import { Psize } from 'src/app/layout/models/psize';
import { AddUpdateSizeComponent } from '../add-update-size/add-update-size.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog-service';


interface GarmentSize extends Psize{
  isEditEnable?: boolean
}
@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  SIZE_MISSING = Constant.SIZE_MISSING
  newGarmentSize : string;
  isListView : boolean = false;

  
  data= [
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HERE & NOW ',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
  

    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},

 
  ]
  garmentSizeList : GarmentSize[] = [
    {
        "id": 1,
        "name": "S",
        "createdAt": "2021-12-18T14:41:35.000Z",
        "updatedAt": "2021-12-18T14:41:35.000Z"
    },
    {
        "id": 2,
        "name": "M",
        "createdAt": "2021-12-18T14:41:42.000Z",
        "updatedAt": "2021-12-18T14:41:42.000Z"
    },
    {
        "id": 3,
        "name": "XL",
        "createdAt": "2021-12-18T14:41:48.000Z",
        "updatedAt": "2021-12-18T14:41:48.000Z"
    },
    {
        "id": 4,
        "name": "All Size",
        "createdAt": "2021-12-26T19:35:00.000Z",
        "updatedAt": "2021-12-26T19:35:00.000Z"
    }
];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  searchText='';

  constructor(
    private alertService : AlertService,
    private ipcService : IPCService,
    private dialogService : DialogService
    ) { }

  ngOnInit(): void {
    // this.garmentSizeList = DefinedSizes.all;
    this.getGarmentSizeList();
  }

  getGarmentSizeList(){
    this.ipcService.database('size','fetch','')
    .then(res => {
      if(res.status){
        this.garmentSizeList = res.data
        console.log("data ng On changes", res)
      }
    })
  }

  onNewSave = ()=> {
    let newGarmentSize:Psize = {  id:0,name : this.newGarmentSize };
    let save = newGarmentSize =>{
      this.ipcService.database("size",'create',newGarmentSize)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item Added Successfully','close');
          this.getGarmentSizeList();
          this.garmentSizeList.push(newGarmentSize);
          this.isNewAddEnable = false;
          this.newGarmentSize = '';
        }
      })
    }
    
  }

  onFocussizeName = (id:Number) =>{
    // alert("id")
    this.garmentSizeList.forEach(size => {
      if(size.id == id){ size.isEditEnable = true;}
    })
  }
 
  onSave = (size:GarmentSize) =>{
    console.table(size);
    this.ipcService.database('size','update',size)
    .then(res =>{
      if(res.status){
        this.getGarmentSizeList();
        console.log("data ng On changes", res)
      }
    })
  }
  onDelete = size =>{ 
    let deletesize = ()=>{
      this.ipcService.database('size','delete',size)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item deleted successfully','close');
          this.getGarmentSizeList();
        }
      })
      this.garmentSizeList.pop()
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deletesize() : '';
    })
  }

  onOpenDialog =()=>{
    let config: MatDialogConfig = {
      width: '30rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose: true,
    }

    this.dialogService.openMatDialog(AddUpdateSizeComponent,{},config)
    .subscribe(() => {
      this.getGarmentSizeList();
    })
  }
  onSearch = (searchText:string)=>{
    this.searchText = searchText
  }

  onDialogClose(data){
    console.log("after close**********************",data);
      this.getGarmentSizeList();
  }
}


