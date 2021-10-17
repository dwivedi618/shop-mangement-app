
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-add-update-inventory',
  templateUrl: './add-update-inventory.component.html',
  styleUrls: ['./add-update-inventory.component.scss']
})
export class AddUpdateInventoryComponent implements OnInit {
  inventoryForm : FormGroup
  localData: any;
  action: any;
  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogRef : MatDialogRef<AddUpdateInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'add';
      
      console.log("data",data,this.localData)
     }

  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      id: null,
      quantity: ['',Validators.required],
      amount: ['',Validators.required],
      pricePerItem: [''],
      date: [''],
      description: [''],
      isAddingStock: ['',Validators.required]
    })

    if(this.action == 'update'){
      this.patchInventoryDataInForm()
    }
  }

  patchInventoryDataInForm(){
    this.inventoryForm.patchValue({id : this.localData?.id})
    this.inventoryForm.patchValue({quantity : this.localData?.quantity})
    this.inventoryForm.patchValue({amount : this.localData?.amount})
    this.inventoryForm.patchValue({pricePerItem : this.localData?.pricePerItem})
    this.inventoryForm.patchValue({description : this.localData?.description})
    this.inventoryForm.patchValue({date : this.localData?.date})
    this.inventoryForm.patchValue({isAddingStock : this.localData?.isAddingStock})
    console.log("Mange Stock Form",this.inventoryForm.value)

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
    this.inventoryForm.patchValue({discountInPercent : discountInPercent})
    this.inventoryForm.patchValue({discountInRuppee : discountInRuppee})
  }

  onDone(){
    let data  =  this.inventoryForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("before save product",this.inventoryForm.value)
    this.ipcService.database('product',action,data).then(
      data=>{
        console.log(`after ${action}  product`,data);
        this.dialogRef.close(data);
      }
    ).catch(err => { console.log(err) });
  }

  onImageChange(image){
    this.inventoryForm.patchValue({ file : image});
    console.log("On image change in product ",image)
  }

  
}

