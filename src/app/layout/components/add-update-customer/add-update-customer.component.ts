import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-add-update-customer',
  templateUrl: './add-update-customer.component.html',
  styleUrls: ['./add-update-customer.component.scss']
})
export class AddUpdateCustomerComponent implements OnInit {
  customerForm : FormGroup
  imagePreview: string;
  localData: Customer;
  action: any;
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<AddUpdateCustomerComponent>,
    @Inject (MAT_DIALOG_DATA) data : any
    ) { 
      this.localData = data;
      this.action = data.action;
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      id : null,
      name : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      photo : [this.imagePreview || '']
    })

    if(this.action == 'update'){
      this.patchCustomerForm();
    }

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
    this.imagePreview = image;
    this.customerForm.patchValue({photo : image});
  }
  onDone(){
    if(this.customerForm.invalid){
      console.log("invalid customer Form");
      return
    }
    let action = this.action == 'add' ? 'create' : 'update' ;
    let data : Customer = this.customerForm.value;
    console.log("customer",data)
    //api call to save customer 
    this.ipcService.database("customer",action ,data).then(data=>{
      this.customerForm.patchValue({id : data?.id });
      console.log("after ",action,data);
      console.log("after customer form ",action,this.customerForm.value);
      this.dialogRef.close(data);
      return

    })

    //return customer data to dialog
    this.dialogRef.close(this.customerForm.value)

  }

}
