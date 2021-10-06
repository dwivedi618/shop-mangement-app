
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

export interface CustomerDetails{
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
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerForm : FormGroup
  localData: any;

  customerPurchaseHistory = [
    {
      id : 1,
      name: 'Saree',
      brand: 'Peter England',
      salePrice: 199,
      discountInPercentage : 3,
      discountInRuppee : 5.97,
      offerPrice : 193.03,
      grade : 'A grade',
      description: 'Wine Purple Woven Kanjivaram Saree - Special Wedding Edition',
      code : '',
      make : '',
      size : '',
      debt:0,
      date : new Date()
    },
    {
      id : 2,
      name: 'Saree Banrasi',
      brand: 'Peter England',
      salePrice: 199,
      discountInPercentage : 3,
      discountInRuppee : 5.97,
      offerPrice : 193.03,
      grade : 'A grade',
      description: 'Wine Purple Woven Kanjivaram Saree - Special Wedding Edition',
      code : '',
      make : '',
      size : '',
      debt:100,
      date: new Date()
    },

  ];
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
        name : [''],
        phone : [''],
        address : [''],
        photo : ['']
  
      })
    }

  onDone(){
    console.log("Mange Stock Form",this.customerForm.value)
    this.ipcService.database('customer', 'create', this.customerForm.value);
  }
}

