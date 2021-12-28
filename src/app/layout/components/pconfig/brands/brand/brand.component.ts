
import { IPCService } from './../../../../../services/ipc.service';
import { Brand } from './../../../../models/brand';
import { AlertService } from 'src/app/services/alert.service';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChildren } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { BrandList } from '../../../../../fakedata/brands'
import { DialogService } from 'src/app/services/dialog-service';
import { AddUpdateBrandComponent } from '../add-update-brand/add-update-brand.component';
import { MatDialogConfig } from '@angular/material/dialog';
interface Brands extends Brand{
  isEditEnable?: boolean
}
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit,OnChanges,AfterViewInit {
  @ViewChildren('someVar') filteredItems;
  filterMetadata = { count: 0 };
  isListView = false;

  count = 0
  count1 = 0

  ngOnChanges(){
    
    let data = this.filteredItems
    console.log("chhhhhhhhhhhhhhhhhhhhh",data)
    
  }
  ngAfterViewInit() {
  
    setTimeout(() => {
      this.filteredItems.changes
      .subscribe(result =>  
        {
        console.log("subscribed",result.length);
        document.getElementById('count').innerText = result.length
        // this.count = 
      })
    }, 0);
    
  }
  // trackElement(index: number, element: any) {
  //   return element ? element.id : null;
  // }
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
  resultfilter : Brands[] = []
  isNewAddEnable : Boolean = false;
  isEditEnable : boolean = false;
  searchText: any;
  constructor(
    private alertService : AlertService,
    private dialogService: DialogService,
    private ipcService : IPCService) {
    this.filterMetadata = { count: 0 };

   }

  ngOnInit(): void {
    this.brands = BrandList.allbrands;
    // this.getBrandList()
  }
  
  getBrandList(){
    this.ipcService.database('brand','fetch','')
    .then(res => {
      if(res.status){
        this.brands = res.data
        console.log("data ng On changes", res)
      }
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

    this.dialogService.openMatDialog(AddUpdateBrandComponent,{},config)
    .subscribe(() => {
      this.getBrandList();
    })
  }
  onNewBrandSave = ()=> {
    // let newBrand1:Brand = {  name : this.newBrand };
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

  onSearch = (searchText:string)=>{
    return this.searchText = searchText
  }
  onDialogClose(data){
    console.log("after close**********************",data);
      this.getBrandList();
  }
}
