import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-inventory-item-details',
  templateUrl: './inventory-item-details.component.html',
  styleUrls: ['./inventory-item-details.component.scss']
})
export class InventoryItemDetailsComponent implements OnInit {
  manageStockForm: FormGroup
  localData: any;
  action: any;
  constructor(private fb: FormBuilder, private ipcService: IPCService ,
    private dialogRef: MatDialogRef<InventoryItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any 
  ) {
    this.localData = data || null;
    this.action = data.action || 'add';
    console.log("data", data,)
  }

  ngOnInit(){
    this.manageStockForm = this.fb.group({
      id: null,
      quantity: ['',Validators.required],
      amount: ['',Validators.required],
      pricePerItem: [''],
      date: [''],
      description: [''],
      isAddingStock: ['',Validators.required]
    })

    this.patchDataInForm();
  }

  private patchDataInForm(){
    this.manageStockForm.patchValue({id : this.localData?.id})
    this.manageStockForm.patchValue({quantity : this.localData?.quantity})
    this.manageStockForm.patchValue({amount : this.localData?.amount})
    this.manageStockForm.patchValue({pricePerItem : this.localData?.pricePerItem})
    this.manageStockForm.patchValue({description : this.localData?.description})
    this.manageStockForm.patchValue({date : this.localData?.date})
    this.manageStockForm.patchValue({isAddingStock : this.localData?.isAddingStock})

  }

  onDone(){
    if(this.manageStockForm.invalid){
      return;
    }
    
    let data  =  this.manageStockForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("Mange Stock Form",this.manageStockForm.value)
    this.ipcService.database('inventory','update',data).then(
      data=>{
        console.log(`after ${action}  inventory`,data);
        this.dialogRef.close(data);
      }
    ).catch(err => { console.log(err) });
  }
}
