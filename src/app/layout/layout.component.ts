import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceListComponent } from './components/service-list/service-list.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  /**
   * primary links
   */
  primaryLinks = [
    { path : 'activity',icon :'grid_view', name : 'Dashboard' },
    { path : 'chats',icon :'dry_cleaning', name : 'Product' },
    { path : 'groups',icon :'groups', name : 'Customer' },
    { path : 'calls',icon :'inventory', name : 'Purchase' },
    { path : 'sale',icon :'sell', name : 'Sale' },
    { path : 'neworder',icon :'add', name : 'New Order' },
    { path : 'neworder',icon :'filter_vintage', name : 'New Jwellary Order' },


    { path : 'return',icon :'undo', name : 'Return' },
    { path : 'files',icon :'published_with_changes', name : 'Replace' },

    { path : 'files',icon :'summarize', name : 'Report' },
    { path : 'files',icon :'settings', name : 'Settings' },


  ]  
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    // this.checkServiceList();
  }
  checkServiceList() {
    const data = {};
    const dialogRef = this.dialog.open(ServiceListComponent, {
      
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose : true,
      data: data,
    });
  }

}
