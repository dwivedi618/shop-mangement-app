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
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.scss']
})
export class ProductItemDetailsComponent implements OnInit {
  manageStockForm : FormGroup
  localData: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<ProductItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data : productDetails
    ) {
      this.localData = data || null;
      console.log("data",data)
     }

  ngOnInit(): void {
    this.manageStockForm = this.fb.group({
      quantity : [''],
      pricePerItem : [''],
      date : [''],
      notes : [''],
      isAddingStock : []
    })
  }

  onDone(){
    console.log("Mange Stock Form",this.manageStockForm.value)
  }
}

