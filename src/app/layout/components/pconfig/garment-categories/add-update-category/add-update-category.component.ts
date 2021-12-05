

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

import { Brand } from 'src/app/layout/models/brand';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.scss']
})
export class AddUpdateCategoryComponent implements OnInit {
  brandForm : FormGroup
  imagePreview: string;
  localData: Brand;
  isLoading = false;
  action: any;
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<AddUpdateCategoryComponent>,
    @Inject (MAT_DIALOG_DATA) data : any
    ) { 
      this.localData = data;
      this.action = data?.id ? 'update' : 'add';
      console.log('localData brand',data,this.action);
      
  }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      id : null,
      name : ['',[Validators.required]],
      phone : ['',[Validators.required,Validators.maxLength(10)]],
      address : ['',[Validators.required]],
      photo : [],
      gender : ['']

    })

    if(this.action == 'update'){
      this.patchbrandForm();
    }

  }

  patchbrandForm(){
    this.brandForm.patchValue({id : this.localData?.id});
    this.brandForm.patchValue({name : this.localData?.name});

  }

  onImageChange(image : string){
    console.log("image from On Image change",image)
    this.imagePreview = image;
    this.brandForm.patchValue({photo : image});
  }


  onDone(){
    this.isLoading = true;
    if(this.brandForm.invalid){
      console.log("invalid brand Form");
      this.isLoading = false;

      return
    }
    let action = this.action == 'add' ? 'create' : 'update' ;
    let data : Brand = this.brandForm.value;
    console.log("brand",data)
    //api call to save brand 
    this.ipcService.database("brand",action ,data).then(res=>{
      if(res.status){
        let brand = res.data;
        console.log("after ipcservice brand",action,data);
        if(brand && brand?.id) this.brandForm.patchValue({id : brand?.id });
        console.log("after brand form ",action,this.brandForm.value);
        if(this.action == 'update') this.dialogRef.close(this.brandForm.value);
        if(this.action == 'add') this.dialogRef.close(this.brandForm.value);
        this.isLoading = true;
        
      }
    })

  }

}

