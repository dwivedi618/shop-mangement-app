import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog-service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private dialogService : DialogService
  ) { }

  ngOnInit(): void {
    
  }

  onClickChangePassword(){
    this.dialogService.openChangePassword({}).subscribe()
  }

  onLock(){
    sessionStorage.removeItem('psmUser');
  }

}
