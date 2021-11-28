import { Pcategory } from './../../../models/pcategory';

import { IPCService } from './../../../../services/ipc.service';
import { Brand } from './../../../models/brand';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { table } from 'console';

interface categoryList extends Brand{
  isEditEnable?: boolean
}
@Component({
  selector: 'app-garments-category',
  templateUrl: './garments-category.component.html',
  styleUrls: ['./garments-category.component.scss']
})
export class GarmentsCategoryComponent implements OnInit {
  BRAND_MISSING = Constant.BRAND_MISSING
  newGarmentCategory : string
  
  data= [
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HERE & NOW ',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
  

    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},

 
  ]
  categoryList : categoryList[] = [];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  newCategory: string;
  constructor(private alertService : AlertService,private ipcService : IPCService) { }

  ngOnInit(): void {
    this.categoryList = this.data;
    // this.getBrandList();
  }

  getBrandList(){
    this.ipcService.database('brand','fetch','')
    .then(res => {
      if(res.status){
        this.categoryList = res.data
        console.log("data ng On changes", res)
      }
    })
  }

  onNewSave = ()=> {
    let newCategory:Pcategory = { id: 0, name : this.newGarmentCategory };
    let save = newCategory =>{
      this.ipcService.database("brand",'create',newCategory)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item Added Successfully','close');
          this.getBrandList();
          // this.categoryList.push(newCategory);//test
          this.isNewAddEnable = false;
          this.newGarmentCategory = '';
        }
      })
    }
    
  }

  onFocusBrandName = (id:Number) =>{
    // alert("id")
    this.categoryList.forEach(brand => {
      if(brand.id == id){ brand.isEditEnable = true;return}
    })
  }
 
  onSave = (brand:categoryList) =>{
    console.table(brand);
    this.ipcService.database('brand','update',brand)
    .then(res =>{
      if(res.status){
        this.getBrandList();
        console.log("data ng On changes", res)
      }
    })
  }
  onDelete = brand =>{ 
    let deleteBrand = ()=>{
      this.ipcService.database('brand','delete',brand)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item deleted successfully','close');
          this.getBrandList();
        }
      })
      this.categoryList.pop()
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deleteBrand() : '';
    })
  }
}

