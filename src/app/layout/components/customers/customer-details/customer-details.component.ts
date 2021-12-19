
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
  alt_photo_male = 'assets/images/male_avatar.png';
  alt_photo_female = 'assets/images/female_avatar.png';


  customerPurchaseHistory = []
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data : CustomerDetails
    ) {
      this.localData = data || null;
      console.log("data",data)
      if(!this.localData.photo){
        if(this.localData?.gender == 'FEMALE'){
          this.localData.photo = this.alt_photo_female 
        }else{
          this.localData.photo = this.alt_photo_male 

        }
      }
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
    this.ipcService.database('customer', 'update', this.customerForm.value).then(res=>{
      if(res.status){
        console.log("after update customer",res);
        this.dialogRef.close(res.data);
      }
    });
  }
  onEdit(){
    this.dialogRef.close('update');
  }
}

