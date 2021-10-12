import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  user = <any>{};
  constructor(private router : Router){
  
  };
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      this.user = JSON.parse(sessionStorage.getItem('psmUser')) || {};
      // console.log("auth guard",this.user)
      if(this.user?.password){
      return true
    }

    this.router.navigate(['./login']);
    // console.log("routing to login")

    return false;
  }

}
