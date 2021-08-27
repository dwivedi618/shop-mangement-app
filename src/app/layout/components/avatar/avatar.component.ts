import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit,AfterViewInit {
  user: any;
  email = 'info@frost.com';
  first_name: any;
  name = 'Frost Dep';
  intials:any;

  constructor(
    private route : Router,
    // private authService : AuthService
  ) { }

  ngOnInit(){
   
  
  }
  ngAfterViewInit(){
  //profile image from user name
  this.intials = this.name.split(' ').map(name => name[0]).join('').toUpperCase();
  }
  navigate(route) {
    console.log("route :",route);
    if (route = 'profile') {
    console.log("routeing... :",route);
      return this.route.navigate(['./profile']);
    }
  }
  navigateToPurchasePlan() {

      this.route.navigate(['../upgrade-plans'])
    
  }
  logout() {
    // this.authService.logout();
    console.log("user logged out");
    
  }
}
