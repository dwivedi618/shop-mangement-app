
import { IPCService } from './../../../../services/ipc.service';
import { Brand } from './../../../models/brand';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { table } from 'console';
import { BrandList } from '../../../../fakedata/brands'
interface Brands extends Brand{
  isEditEnable?: boolean
}
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  BRAND_MISSING = Constant.BRAND_MISSING
  newBrand : string
  
  data= [
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HERE & NOW ',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
  

    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},
    { id: 1 , name : 'HRX',isEditEnable : false},

 
  ]
  brands : Brands[] = [];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  constructor(private alertService : AlertService,private ipcService : IPCService) { }

  ngOnInit(): void {
    this.brands = BrandList.allbrands;
    // this.getBrandList();
    // this.refineData()
  }

  // refineData(){
  //   let beforeRefine = BrandList.allbrands;
  //   beforeRefine.forEach(element => {
  //     element['name'] = element['value'];
  //     delete element.value;
  //     delete element.pLevel;
  //     delete element.count;
  //     delete element.meta;
  //     return

  //   });
  //   console.table(beforeRefine);
  //   console.log(beforeRefine);
  // }
  
  getBrandList(){
    this.ipcService.database('brand','fetch','')
    .then(res => {
      if(res.status){
        this.brands = res.data
        console.log("data ng On changes", res)
      }
    })
  }

  onNewBrandSave = ()=> {
    let newBrand:Brand = {  name : this.newBrand };
    let save = newBrand =>{
      this.ipcService.database("brand",'create',newBrand)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item Added Successfully','close');
          this.getBrandList();
          this.brands.push(newBrand);
          this.isNewAddEnable = false;
          this.newBrand = '';
        }
      })
    }
    
  }

  onFocusBrandName = (id:Number) =>{
    // alert("id")
    this.brands.forEach(brand => {
      if(brand.id == id){ brand.isEditEnable = true;return}
    })
  }
 
  onSave = (brand:Brands) =>{
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
      this.brands.pop()
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deleteBrand() : '';
    })
  }
}
