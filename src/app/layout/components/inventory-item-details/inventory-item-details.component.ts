import { FormBuilder, FormGroup } from '@angular/forms';
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
  localData: Inventory;
  action: any;
  constructor(private fb: FormBuilder, private ipcService: IPCService ,
    private dialogRef: MatDialogRef<InventoryItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any 
  ) {
    this.localData = <Inventory>data || null;
    this.action = data.action || 'add';

    console.log("data", data,)
  }

  ngOnInit(): void {
    // id : 1;
    // item : Product;
    // itemInStock : number;
    // pricePerItem : number;
    // totalStockPrice : number;
    // lastUpdate : Date;
    // description: '';
    // code : ''
    this.manageStockForm = this.fb.group({
      id: null,
      quantity: [''],
      item: [],
      pricePerItem: [''],
      date: [''],
      notes: [''],
      isAddingStock: []
    })

    // this.patchDataInForm();
  }

  // private patchDataInForm(){
  //   this.manageStockForm.patchValue({id : this.localData?.id})
  //   this.manageStockForm.patchValue({quantity : this.localData?.quantity})
  //   this.manageStockForm.patchValue({pricePerItem : this.localData?.pricePerItem})
  //   this.manageStockForm.patchValue({notes : this.localData?.notes})
  //   this.manageStockForm.patchValue({id : this.localData?.id})

  // }

  onDone(){
    let data  =  this.manageStockForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("Mange Stock Form",this.manageStockForm.value)
    this.ipcService.database('inventory',action,data).then(
      data=>{
        console.log(`after ${action}  inventory`,data);
        this.dialogRef.close(data);
      }
    ).catch(err => { console.log(err) });
  }
}
