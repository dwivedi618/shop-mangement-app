import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  BRAND_MISSING = Constant.BRAND_MISSING
  newBrand : string
  data = [
    { id: 1 , name : 'HRX',isEditEnable : false},
 
  ]
  brands =[];
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  constructor(private alertService : AlertService) { }

  ngOnInit(): void {
    this.brands = this.data
  }

  onNewBrandSave = ()=> {
    let newBrand = { id:this.brands.length+1 , name : this.newBrand };
    this.brands.push(newBrand);
    this.isNewAddEnable = false;
    this.newBrand = '';
  }

  onFocusBrandName = (id:Number) =>{
    // alert("id")
    this.brands.forEach(brand => {
      if(brand.id == id){ brand.isEditEnable = true;return}
    })
  }
  // onFocusBrandName(id:Number){
  //   alert("id")
  //   this.brands.forEach(brand => {
  //     if(brand.id == id){ brand.isEditEnable = true;return}
  //   })
  // }
  onSave(name){
    alert(name);
  }
  onDelete = id =>{ 
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete').subscribe(result=>{

      result ? this.brands.pop() : '';
    })
  }
}
