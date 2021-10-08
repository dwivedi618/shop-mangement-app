import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-customer',
  templateUrl: './add-update-customer.component.html',
  styleUrls: ['./add-update-customer.component.scss']
})
export class AddUpdateCustomerComponent implements OnInit {
  customerForm : FormGroup
  imagePreview: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<AddUpdateCustomerComponent>
    ) { 

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      photo : [this.imagePreview || '']
    })
  }
  fileUploadReset() {
    if (this.imagePreview) {
      this.imagePreview = '';
    }
  }
  getProfilePicObject() {
    if (this.imagePreview) {
      return {
        image: this.imagePreview,
        width: 150,
        alignment: 'right'
      };
    }
    return null;
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.getBase64(file);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result as string;
    // }
    // reader.readAsDataURL(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.imagePreview = reader.result as string;
      this.customerForm.patchValue({ photo : reader.result as string})
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  onDone(){
    if(this.customerForm.invalid){
      console.log("invalid customer Form");
      
      return
    }

    //api call to save customer 

    //return customer data to dialog
    this.dialogRef.close(this.customerForm.value)

  }

}
