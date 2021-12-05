


import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

import { Pcolor } from 'src/app/layout/models/pcolor';
import { Psize } from 'src/app/layout/models/psize';

@Component({
  selector: 'app-add-update-size',
  templateUrl: './add-update-size.component.html',
  styleUrls: ['./add-update-size.component.scss']
})
export class AddUpdateSizeComponent implements OnInit {
  sizeForm : FormGroup
  imagePreview: string;
  localData: Psize;
  isLoading = false;
  action: any;
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<AddUpdateSizeComponent>,
    @Inject (MAT_DIALOG_DATA) data : any
    ) { 
      this.localData = data;
      this.action = data?.id ? 'update' : 'add';
      console.log('localData size',data,this.action);
      
  }

  ngOnInit(): void {
    this.sizeForm = this.fb.group({
      id : null,
      name : ['',[Validators.required]],
    

    })

    if(this.action == 'update'){
      this.patchsizeForm();
    }

  }

  patchsizeForm(){
    this.sizeForm.patchValue({id : this.localData?.id});
    this.sizeForm.patchValue({name : this.localData?.name});

  }

  onImageChange(image : string){
    console.log("image from On Image change",image)
    this.imagePreview = image;
    this.sizeForm.patchValue({photo : image});
  }


  onDone(){
    this.isLoading = true;
    if(this.sizeForm.invalid){
      console.log("invalid size Form");
      this.isLoading = false;

      return
    }
    let action = this.action == 'add' ? 'create' : 'update' ;
    let data : Pcolor = this.sizeForm.value;
    console.log("size",data)
    //api call to save size 
    this.ipcService.database("size",action ,data).then(res=>{
      if(res.status){
        let sizeresp = res.data;
        console.log("after ipcservice size",action,data);
        if(sizeresp && sizeresp?.id) this.sizeForm.patchValue({id : sizeresp?.id });
        console.log("after size form ",action,this.sizeForm.value);
        if(this.action == 'update') this.dialogRef.close(this.sizeForm.value);
        if(this.action == 'add') this.dialogRef.close(this.sizeForm.value);
        this.isLoading = true;
        
      }
    })

  }

}

