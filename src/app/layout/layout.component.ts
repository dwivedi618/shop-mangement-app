import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
    // { path : 'dashboard',icon :'grid_view', name : 'Dashboard' },
    { path : 'inventory',icon :'inventory', name : 'Inventory' },
    { path : 'product',icon :'dry_cleaning', name : 'Product' },
    { path : 'customer',icon :'groups', name : 'Customer' },
    // { path : 'purchase',icon :'money', name : 'Purchase' },
    { path : 'sale',icon :'sale', name : 'sale' },
    { path : 'settings',icon :'settings', name : 'Settings' },
  ]  
  settingLinks = [
    { path : 'settings/generalsettings',icon :'settings_applications', name : 'General' },
    { path : 'settings/appearancesettings',icon :'grid_view', name : 'Appearance' },
    { path : 'settings/systemfilter',icon :'settings_input_composite', name : 'System Filter' },
    { path : 'settings/accountsettings',icon :'admin_panel_settings', name : 'Account' },
  ]  
  currentPath: string;
  beforeCurrentPath: string;
  constructor(
    private dialog:MatDialog,
    private activatedRoute:ActivatedRoute,
    private router : Router,
    ) { 
      let links = this.primaryLinks
      this.router.events.subscribe((routerEvent) => {
        if(routerEvent instanceof NavigationEnd) {
            // Get your url
            console.log(routerEvent.url);
            let allPath = routerEvent.url.split('/');
            this.currentPath = allPath[allPath.length - 1] || ''
            this.beforeCurrentPath = allPath[allPath.length - 2] || ''


            console.log(this.currentPath);
            if(this.currentPath === 'cart'){
              this.primaryLinks = []
            }else if(this.currentPath === 'settings' || this.beforeCurrentPath === 'settings'){
              this.primaryLinks = this.settingLinks
            }
            else{
              this.primaryLinks = links
            }

        }
    });
  }

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
