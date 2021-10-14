
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { Product } from '../../models/product';

export interface productDetails{
  id : number,
  name: string,
  brand: string,
  salePrice:number,
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
  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogRef : MatDialogRef<AddUpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'add';
      
      console.log("data",data,this.localData)
     }

  ngOnInit(): void {
    this.productForm= this.fb.group({
      id : null,
      grade : [],
      name : [],
      salePrice : [],
      brand: [],
      productCode: [],
      size: [],
      make : [],
      price : [],
      unit : [],
      discountInPercent : [],
      discountInRuppee : [],
      description : [],
      isSellByMeter : [],
      length : [],
      file : []
    })

    if(this.action == 'update'){
      this.patchProductDataInForm()
    }
  }

  patchProductDataInForm(){
    this.productForm.patchValue({id : this.localData?.id})
    this.productForm.patchValue({name : this.localData?.name})
    this.productForm.patchValue({salePrice : this.localData?.salePrice})
    this.productForm.patchValue({brand : this.localData?.brand})
    this.productForm.patchValue({productCode : this.localData?.productCode})
    this.productForm.patchValue({size : this.localData?.size})
    this.productForm.patchValue({grade : this.localData?.grade})
    this.productForm.patchValue({make : this.localData?.make})
    this.productForm.patchValue({price : this.localData?.price})
    this.productForm.patchValue({unit : this.localData?.unit})
    this.productForm.patchValue({discountInPercent : this.localData?.discountInPercent})
    this.productForm.patchValue({discountInRuppee : this.localData?.discountInRuppee})
    this.productForm.patchValue({length : this.localData?.length})
    this.productForm.patchValue({description : this.localData?.description})
    this.productForm.patchValue({isSellByMeter : this.localData?.isSellByMeter})
    this.productForm.patchValue({file : this.localData?.file})
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
      data=>{
        console.log(`after ${action}  product`,data);
        this.dialogRef.close(data);
      }
    ).catch(err => { console.log(err) });
  }

  onImageChange(image){
    this.productForm.patchValue({ file : image});
    console.log("On image change in product ",image)
  }

  
}

