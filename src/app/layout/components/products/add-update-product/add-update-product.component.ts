
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { Product } from '../../../models/product';
import { BrandList } from 'src/app/fakedata/brands';
import { DefinedSizes } from 'src/app/fakedata/sizes';
import { DefinedColors } from 'src/app/fakedata/colors';
import { DefinedCategory } from 'src/app/fakedata/categories';
import { Pcategory } from 'src/app/layout/models/pcategory';



export interface productDetails{
  id : number,
  name: string,
  brand: string,
  price:number,
  discountInPercentage : number,
  discountInRuppee :number,
  offerPrice :number,
  grade : string,
  description:string,
  code :string,
  make : string,
  size : string,
}

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss']
})
export class AddUpdateProductComponent implements OnInit {
  productForm : FormGroup
  localData: any;
  action: any;
  categories : Pcategory[] =[];
  brands: any;
  sizes: any;
  colors: any;
  isViewLoading: boolean=true;
  colorsIDs: any[];
  sizesIDs: any[];
  // brands: { id: string; name: string; }[];
  // sizes: { id: string; name: string; }[];
  // colors: { id: string; name: string; code: string; }[];
  // garmentCategory: { id: string; name: string; }[];
  // categories: { id: string; name: string; }[];
  // brands = BrandList.allbrands
  // sizes = DefinedSizes.all
  // colors = DefinedColors.all
  // categories = DefinedCategory.all
  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogRef : MatDialogRef<AddUpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product
    ) {
      this.localData = data || null;
       if(this.localData?.colors){
        this.colorsIDs=[]
        this.localData.colors.forEach(color => {
          this.colorsIDs.push(color.id)
        });
      }
      if(this.localData?.sizes){
        this.sizesIDs=[]
        this.localData.colors.forEach(color => {
          this.sizesIDs.push(color.id)
        });
      }
      this.action = this.localData?.action || 'add';
      
      console.log("data",data,this.localData);
      this.getAllDropdown();


     }

  ngOnInit(): void {
    this.productForm= this.fb.group({
      id : null,
      brand : [],
      colors : [],
      sizes : [],
      category : [],
      subCategory : [],
      stock:[],
      name : [],
      price : [],
      productCode: [],
      unit : [],
      discountInPercent : [],
      discountInRuppee : [],
      description : [],
      sellBy : [],
      length : [],
      image : []
    })

    if(this.action == 'update'){
      this.patchProductDataInForm();
    }
    setTimeout(() => {
      this.isViewLoading = false;
    }, 1000);

  }
  private getAllDropdown(){
    this.ipcService.allConfigDropdown().then(res=>{
      console.log("inside add update product",res);
      let [category,brand,size,color] = res ?? [];
      console.log('category',category.data);
      console.log('brand',brand.data);
      console.log('size',size.data);
      console.log('color',color.data);
      this.categories = category?.data
      this.brands = brand?.data
      this.sizes = size?.data
      this.colors= color?.data
    })
  }

  patchProductDataInForm(){
    this.productForm.patchValue({id : this.localData?.id})
    this.productForm.patchValue({name : this.localData?.name})
    this.productForm.patchValue({productCode : this.localData?.productCode})
    this.productForm.patchValue({category : this.localData?.category?.id})
    this.productForm.patchValue({subCategory : this.localData?.subCategory?.id})

    this.productForm.patchValue({brand : this.localData?.brand?.id as string})
    this.productForm.patchValue({sizes : this.sizesIDs})
    this.productForm.patchValue({colors : this.colorsIDs})
    this.productForm.patchValue({stock : this.localData?.stock})

    this.productForm.patchValue({price : this.localData?.price})
    this.productForm.patchValue({unit : this.localData?.unit})
    this.productForm.patchValue({discountInPercent : this.localData?.discountInPercent})
    this.productForm.patchValue({discountInRuppee : this.localData?.discountInRuppee})
    this.productForm.patchValue({length : this.localData?.length})
    this.productForm.patchValue({description : this.localData?.description})
    this.productForm.patchValue({sellBy : this.localData?.sellBy})
    this.productForm.patchValue({image : this.localData?.image})
    console.log("Mange Stock Form",this.productForm.value)

  }

  onDiscountChanged(price:number,discountValue : number,type : string){
    let discountInRuppee = 0;
    let discountInPercent = 0
    if(type == 'percent'){
      discountInRuppee = Math.round((price * discountValue/100)*100)/100;
      discountInPercent = discountValue;
      
    }else{
      discountInRuppee = discountValue
      discountInPercent = Math.round((discountValue * 100 /price)*100)/100 
    }
    this.productForm.patchValue({discountInPercent : discountInPercent})
    this.productForm.patchValue({discountInRuppee : discountInRuppee})
  }

  onDone(){
    let data  =  this.productForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("before save product",this.productForm.value)
    this.ipcService.database('product',action,data).then(
      res=>{
        if(res.status){
          console.log(`after ${action}  product`,res);
          this.dialogRef.close(res.data);
        }
      }
    ).catch(err => { console.log(err) });
  }

  onImageChange(image){
    this.productForm.patchValue({ image : image});
    console.log("On image change in product ",image)
  }

  getSubCategories(categoryId){
    const selectedCategory = this.categories.find(el=> el.id == categoryId);
    console.log("selectedCategory",selectedCategory)
    console.log("this.categories",this.categories)

    if(selectedCategory && selectedCategory.subCategories){
      return selectedCategory.subCategories
    }else {
      return []
    }
  }
  
}

