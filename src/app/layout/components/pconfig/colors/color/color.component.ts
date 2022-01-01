
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { Pcolor } from 'src/app/layout/models/pcolor';
import { DefinedColors } from 'src/app/fakedata/colors';
import { DefinedSubCategory } from 'src/app/fakedata/subcategories';
import { IPCService } from 'src/app/services/ipc.service';
import { AddUpdateColorComponent } from '../add-update-color/add-update-color.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog-service';

interface Colors extends Pcolor{
  isEditEnable?: boolean
}

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  COLOR_MISSING = Constant.COLOR_MISSING
  newColorCode : string
  isListView : boolean = false;
  data= [
    { id: 1 , name : 'Orange Red',code :'#EABABB',isEditEnable : false},
    { id: 2 , name : 'Red',code :'#fbb000',isEditEnable : false},
    { id: 3 , name : 'white',code :'#cccccc',isEditEnable : false},

  ]
  colors : Colors[] = [
    {
        "id": 1,
        "name": "red",
        "code": "#cb2525",
        "createdAt": "2021-12-18T14:40:50.000Z",
        "updatedAt": "2021-12-18T14:40:50.000Z"
    },
    {
        "id": 2,
        "name": "Blue",
        "code": "#5837cd",
        "createdAt": "2021-12-18T14:41:09.000Z",
        "updatedAt": "2021-12-18T14:41:09.000Z"
    },
    {
        "id": 3,
        "name": "Black",
        "code": "#000000",
        "createdAt": "2021-12-18T14:41:24.000Z",
        "updatedAt": "2021-12-18T14:41:24.000Z"
    },
    {
        "id": 4,
        "name": "Green",
        "code": "#00a853",
        "createdAt": "2021-12-26T16:38:54.000Z",
        "updatedAt": "2021-12-26T16:38:54.000Z"
    },
    {
        "id": 5,
        "name": "Brown",
        "code": "#ad775e",
        "createdAt": "2021-12-26T16:39:13.000Z",
        "updatedAt": "2021-12-26T16:39:13.000Z"
    },
    {
        "id": 6,
        "name": "Yellow",
        "code": "#f5d400",
        "createdAt": "2021-12-26T16:39:51.000Z",
        "updatedAt": "2021-12-26T16:39:51.000Z"
    },
    {
        "id": 7,
        "name": "Orange",
        "code": "#f78318",
        "createdAt": "2021-12-26T16:40:22.000Z",
        "updatedAt": "2021-12-26T16:40:22.000Z"
    }
];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  colorCode: string = 'rgba(210, 105, 30, 0)';//no color or transparent
  colorName: string;
  searchText='';
  constructor(
    private alertService : AlertService,
    private ipcService : IPCService,
    private dialogService : DialogService
    ) { }

  ngOnInit(): void {
    // this.colors = DefinedColors.all;
    this.getColorList();
 
  }

 

  getColorList(){
    this.ipcService.database('color','fetch','')
    .then(res => {
      if(res.status){
        this.colors = res.data
        console.log("data ng On changes", res)
      }
    })
  }

  onNewColorSave = ()=> {
    let newcolor:Pcolor = { id:1, name : this.colorName,code: this.colorCode };
    let save = newcolor =>{
      this.ipcService.database("color",'create',newcolor)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item Added Successfully','close');
          this.getColorList();
        
          this.isNewAddEnable = false;
          this.colorCode = '';
          this.colorName = '';

        }
      })
    }
  }


 /**
  * @param data 
  */
  onSave = (data:Colors) =>{
    console.table(data);
    this.ipcService.database('color','update',data)
    .then(res =>{
      if(res.status){
        this.getColorList();
        console.log("data ng On changes", res)
      }
    })
  }

  /**
   * @param color 
   */
  onDelete = color =>{ 
    let deletecolor = ()=>{
      this.ipcService.database('color','delete',color)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item deleted successfully','close');
          this.getColorList();
        }
      })
      this.colors.pop()
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deletecolor() : '';
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

    this.dialogService.openMatDialog(AddUpdateColorComponent,{},config)
    .subscribe(() => {
      this.getColorList();
    })
  }
  onSearch = (searchText:string)=>{
    this.searchText = searchText
  }
  onDialogClose(data){
    console.log("after close**********************",data);
      this.getColorList();
  }
}


