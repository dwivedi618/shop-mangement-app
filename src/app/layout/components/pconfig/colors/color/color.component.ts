
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
  
  data= [
    { id: 1 , name : 'Orange Red',code :'#EABABB',isEditEnable : false},
    { id: 2 , name : 'Red',code :'#fbb000',isEditEnable : false},
    { id: 3 , name : 'white',code :'#cccccc',isEditEnable : false},

  ]
  colors : Colors[] = [];
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
}


