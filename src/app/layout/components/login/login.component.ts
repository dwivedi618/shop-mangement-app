

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  password : any;
  isPasswordHidden: Boolean = true
  loginForm: FormGroup;
  isLogging: Boolean = false
  expandAnimation = 'collapsed';
  MSG: string;
  constructor(
    private formBuilder: FormBuilder,
    private ipcService : IPCService,
    private router : Router

  ) { 
    // let user = {password : 'welcome@123'}
    // sessionStorage.setItem('psmUser',JSON.stringify(user));
    // sessionStorage.removeItem('psmUser');

  }

  ngOnInit(): void {
    // this.getSystemUsers()
  }
  /**initialize a login form */


  submitLoginCredential() {
 
    this.isLogging = true;
    if (!this.password) {
      this.isLogging = false;
      this.MSG = Constant.INVALID_PASSWORD_MSG;
      this.password = ''

      setTimeout(()=>{
        this.MSG = '';

      },4000)
      return
    }



    this.ipcService.database('user','fetch','').then(res => {
      this.isLogging = false;
      if(res.status){
        let users = res.data;
        console.log("login result", users,this.password)
        users.forEach(user => {
          if(user.password == this.password){
            sessionStorage.setItem('psmUser',JSON.stringify(user));
            console.log("login success",user);
  
            this.router.navigate(['']);
            return
          }else{
            console.log("login failed",user);
            this.isLogging = false;
            this.MSG = Constant.INVALID_PASSWORD_MSG;
            this.password = ''
      
            setTimeout(()=>{
              this.MSG = '';
      
            },4000)
  
          }
        });
      }
    }).catch(error=>{throw new Error})
  }


}
