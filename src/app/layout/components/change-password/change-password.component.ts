import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPCService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  currentPassword : string;
  newPassword : string;
  confirmPassword : string;
  msg = ''

  localData: any;
  action: any;
  currentUser: any;
  constructor(
    private ipcService : IPCService,
    private dialogRef : MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) data : any
    ) {
      this.localData = data || null;
      this.action = 'update';
      
      console.log("data",data,this.localData)
     }

  ngOnInit(): void {
    this.getSystemUser();
  }

  private getSystemUser(){
    let currentUserId = this.localData?.id
    this.ipcService.database('user','fetch','').then(users=>{
      this.currentUser = users.filter(user => user.id == currentUserId)[0]
      console.log("user found",this.currentUser)
    })

  }

  onChangePassword(){

    setTimeout(()=>{
      this.msg = ''
    },3)
    let user = this.currentUser;
    console.log("this. user",user)
    if(this.currentPassword == user?.password){
      if(this.newPassword == this.confirmPassword){
        let data = user;
        data.password = this.newPassword;
        console.log("before change password",data)
        this.ipcService.database('user','update',data).then(data=>{
          console.log("after change password",data)
        })
      }else {
        this.msg = 'New Password should match with Confirm Password'
      }
    }else{
      this.msg = 'Current password is correct'

    }
  }

}
