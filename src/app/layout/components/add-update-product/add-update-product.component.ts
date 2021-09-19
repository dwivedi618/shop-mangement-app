
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

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
    private dialogRef : MatDialogRef<AddUpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) data : productDetails
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'new';
      
      console.log("data",data,this.localData)
     }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      grade : [''],
      make : [''],
      price : [''],
      unit : [''],
      discountInPercent : [''],
      discountInRuppee : [''],
      description : [''],
      isSellByMeter : [''],
      length : [''],
      file : ['']
    })

    if(this.action == 'update'){
      this.patchProductDataInForm()
    }
  }

  patchProductDataInForm(){
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
  }

  onDone(){
    console.log("Mange Stock Form",this.productForm.value)
  }
}

