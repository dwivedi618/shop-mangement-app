
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

export interface CustomerDetails{
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
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerForm : FormGroup
  localData: any;

  customerPurchaseHistory = []
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data : CustomerDetails
    ) {
      this.localData = data || null;
      console.log("data",data)
     }

     ngOnInit(): void {
      this.customerForm = this.fb.group({
        id : [],
        name : [''],
        phone : [''],
        address : [''],
        photo : ['']
      })

      this.patchCustomerForm();
    }

    patchCustomerForm(){
      this.customerForm.patchValue({id : this.localData?.id});
      this.customerForm.patchValue({name : this.localData?.name});
      this.customerForm.patchValue({phone : this.localData?.phone});
      this.customerForm.patchValue({address : this.localData?.address});
      this.customerForm.patchValue({photo : this.localData?.photo});
    }
  
    onImageChange(image : string){
      console.log("image from On Image change",image)
      this.customerForm.patchValue({photo : image});
    }

  onDone(){
    console.log("Mange Stock Form",this.customerForm.value)
    this.ipcService.database('customer', 'update', this.customerForm.value).then(data=>{
      console.log("after update customer",data);
      this.dialogRef.close(data);
    });
  }
  onEdit(){
    this.dialogRef.close('update');
  }
}

