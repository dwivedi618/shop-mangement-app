import { IPCService } from './../../../services/ipc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-setup',
  templateUrl: './app-setup.component.html',
  styleUrls: ['./app-setup.component.scss']
})
export class AppSetupComponent implements OnInit {

  videoScreen = true;
  isPasswordHidden = true;
  isCreatingAccount = false;
  name : string;
  password : string;
  step1 = true;
  step2: boolean;
  constructor(
    private router : Router,
    private ipcService : IPCService
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.videoScreen = false;
    },8000);

    this.checkUserExist();
  }
  checkUserExist(){
    this.ipcService.database('user','fetch','').then(res=>{
      if(res.status && res.data.length){
        this.router.navigate(['./dashboard']);
      }
    })
  }

  createAccount(){
    
    if(this.name){
      this.step1 = false;
      this.step2 = true;
    }else{
      this.step1 = true;
      this.step2 = false;
    }
    if(this.name && this.password){
      let user = {
        name : this.name,
        password : this.password
  
      }
    this.isCreatingAccount = true;
      this.ipcService.database('user','create',user).then(res =>{
        console.log(res);
        this.isCreatingAccount = false
        if(res.status){
          this.router.navigate(['./dashboard'])
        }
      })
    }
  }
  onBack(){
    this.step1 = true;
    this.step2 = false;
    this.password = ''

  }

}
