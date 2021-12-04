import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  psmUser = <any>{}
  constructor(
    private router : Router,
    private dialogService : DialogService
  ) { }

  ngOnInit(): void {
    this.psmUser = JSON.parse(sessionStorage.getItem('psmUser'))
    console.log("psmUser",this.psmUser)
  }

  onClickChangePassword(){
    this.dialogService.openChangePassword(this.psmUser).subscribe()
  }

  onLock(){
    sessionStorage.removeItem('psmUser');
    this.router.navigate([''])
  }

}
