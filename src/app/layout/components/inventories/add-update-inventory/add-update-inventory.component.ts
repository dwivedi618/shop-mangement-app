
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { Product } from '../../../models/product';
import { DialogService } from 'src/app/services/dialog-service';

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
  selector: 'app-add-update-inventory',
  templateUrl: './add-update-inventory.component.html',
  styleUrls: ['./add-update-inventory.component.scss']
})
export class AddUpdateInventoryComponent implements OnInit {
  inventoryForm : FormGroup
  localData: any;
  action: any;
  items  = [
    //  { name : 'product'},
    //  { name : 'product'},
    //  { name : 'product'},
    //  { name : 'product'},
    //  { name : 'product'},
    //  { name : 'product'},

  ]
  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogService : DialogService,

    private dialogRef : MatDialogRef<AddUpdateInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product
    ) {
      this.localData = data || null;
      this.action = this.localData?.id ? 'update' : 'add';

      
      console.log("data",data,this.localData)
     }


  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      id: null,
      item : [''],
      quantity: ['',Validators.required],
      amount: ['',Validators.required],
      date: [''],
      description: [''],
     
    })

    if(this.action == 'update'){
      this.patchInventoryDataInForm()
    }
    this.fetchProduct();
  }

  patchInventoryDataInForm(){
    this.inventoryForm.patchValue({id : this.localData?.id})
    this.inventoryForm.patchValue({item : this.localData?.item?.id})

    this.inventoryForm.patchValue({quantity : this.localData?.quantity})
    this.inventoryForm.patchValue({amount : this.localData?.amount})
    this.inventoryForm.patchValue({description : this.localData?.description})
    this.inventoryForm.patchValue({date : this.localData?.date})
    console.log("Mange Stock Form",this.inventoryForm.value)

  }

  private fetchProduct() {
    this.ipcService.database('product', 'fetch', '').then((res) => {
      if(res.status){
        this.items = res.data;
        console.log("ftech product", res);
      }
    })
  }
  onSelectProduct(){
    this.dialogService.openSelectionModel({}).subscribe(data=>{})
  }


  onDone(){
    let data  =  this.inventoryForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("before save product",this.inventoryForm.value)
    this.ipcService.database('inventory',action,data).then(
      res=>{
        if(res.status){
          console.log(`after ${action}  inventory`,res);
          this.dialogRef.close(res.data);
        }
      }
    ).catch(err => { console.log(err) });
  }


}

