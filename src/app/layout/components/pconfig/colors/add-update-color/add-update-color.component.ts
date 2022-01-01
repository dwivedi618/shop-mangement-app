

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

import { Brand } from 'src/app/layout/models/brand';
import { Color } from 'electron/entities/color';

@Component({
  selector: 'app-add-update-color',
  templateUrl: './add-update-color.component.html',
  styleUrls: ['./add-update-color.component.scss']
})
export class AddUpdateColorComponent implements OnInit {
  colorForm : FormGroup
  imagePreview: string;
  localData: Color;
  isLoading = false;
  action: any;
  constructor(
    private fb: FormBuilder,
    private ipcService: IPCService,
    private dialogRef : MatDialogRef<AddUpdateColorComponent>,
    @Inject (MAT_DIALOG_DATA) data : any
    ) { 
      this.localData = data;
      this.action = data?.id ? 'update' : 'add';
      console.log('localData brand',data,this.action);
      
  }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      id : null,
      name : ['',[Validators.required]],
      code : [],
      photo : [],


    })

    if(this.action == 'update'){
      this.patchcolorForm();
    }

  }

  patchcolorForm(){
    this.colorForm.patchValue({id : this.localData?.id});
    this.colorForm.patchValue({name : this.localData?.name});
    this.colorForm.patchValue({code : this.localData?.code});


  }

  onImageChange(image : string){
    console.log("image from On Image change",image)
    this.imagePreview = image;
    this.colorForm.patchValue({photo : image});
  }


  onDone(){
    this.isLoading = true;
    if(this.colorForm.invalid){
      console.log("invalid brand Form");
      this.isLoading = false;

      return
    }
    let action = this.action == 'add' ? 'create' : 'update' ;
    let data : Brand = this.colorForm.value;
    console.log("brand",data)
    //api call to save brand 
    this.ipcService.database("color",action ,data).then(res=>{
      if(res.status){
        let brand = res.data;
        console.log("after ipcservice brand",action,data);
        if(brand && brand?.id) this.colorForm.patchValue({id : brand?.id });
        console.log("after brand form ",action,this.colorForm.value);
        if(this.action == 'update') this.dialogRef.close(this.colorForm.value);
        if(this.action == 'add') this.dialogRef.close(this.colorForm.value);
        this.isLoading = true;
        
      }
    })

  }

}

