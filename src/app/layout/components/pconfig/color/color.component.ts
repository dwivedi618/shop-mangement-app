
import { IPCService } from './../../../../services/ipc.service';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { Pcolor } from 'src/app/layout/models/pcolor';

interface Colors extends Pcolor{
  isEditEnable?: boolean
}

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  _MISSING = Constant.COLOR_MISSING
  newColor : string
  
  data= [
    { id: 1 , name : 'HRX',code :'#orangered',isEditEnable : false},
 

 
  ]
  colors : Colors[] = [];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  colorCode: string;
  constructor(private alertService : AlertService,private ipcService : IPCService) { }

  ngOnInit(): void {
    this.colors = this.data;
    // this.getColorList();
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
    let newcolor:Pcolor = { id:1, name : this.newColor,code: this.colorCode };
    let save = newcolor =>{
      this.ipcService.database("color",'create',newcolor)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item Added Successfully','close');
          this.getColorList();
          this.colors.push(newcolor);
          this.isNewAddEnable = false;
          this.newColor = '';
        }
      })
    }
  }


 
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
}


