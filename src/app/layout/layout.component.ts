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
    { path : 'neworder',icon :'add', name : 'New Order' },
    { path : 'dashboard',icon :'grid_view', name : 'Dashboard' },
    { path : 'inventory',icon :'inventory', name : 'Inventory' },
    { path : 'product',icon :'dry_cleaning', name : 'Product' },
    { path : 'customer',icon :'groups', name : 'Customer' },
    { path : 'purchase',icon :'money', name : 'Purchase' },
    { path : 'sale',icon :'sell', name : 'Sale' },
    // { path : 'return',icon :'undo', name : 'Return' },
    // { path : 'replace',icon :'published_with_changes', name : 'Replace' },
    // { path : 'report',icon :'summarize', name : 'Report' },
    { path : 'settings',icon :'settings', name : 'Settings' },

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
