import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog-service';

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
  productForm : FormGroup
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
  }

  onEdit(){
    this.onClose();
  }
  onClose(){
    this.dialogRef.close('update');
  }
}

