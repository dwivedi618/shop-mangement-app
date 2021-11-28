import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

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
    { path : 'neworder',icon :'add', name : 'New Sell' },
    // { path : 'dashboard',icon :'grid_view', name : 'Dashboard' },
    { path : 'inventory',icon :'inventory', name : 'Inventory' },
    { path : 'product',icon :'dry_cleaning', name : 'Product' },
    { path : 'customer',icon :'groups', name : 'Customer' },
    { path : 'sale',icon :'sell', name : 'Sell History' },
    { path : 'pconfig',icon :'build_circle', name : 'Configuration' },
    { path : 'settings',icon :'settings', name : 'Settings' },
  ]  
  settingLinks = [
    { path : 'dashboard',icon :'keyboard_arrow_left', name : 'Exit Setting' },
    // { path : 'settings/generalsettings',icon :'settings_applications', name : 'General' },
    { path : 'settings/appearancesettings',icon :'grid_view', name : 'Appearance' },
    // { path : 'settings/systemfilter',icon :'settings_input_composite', name : 'System Filter' },
    { path : 'settings/accountsettings',icon :'admin_panel_settings', name : 'Account' },
  ]  

  pconfigLinks = [
    { path : 'dashboard',icon :'keyboard_arrow_left', name : 'Exit Config' },
    { path : 'pconfig/brand',icon :'workspace_premium', name : 'Brand' },
    { path : 'pconfig/category',icon :'category', name : 'Category' },
    { path : 'pconfig/color',icon :'palette', name : 'Color' },
    { path : 'pconfig/size',icon :'format_size', name : 'Size' }
  ] 
  currentPath: string;
  beforeCurrentPath: string;

  constructor(
    private dialog:MatDialog,
    private activatedRoute:ActivatedRoute,
    private alert : AlertService,
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
            else if(this.currentPath === 'pconfig' || this.beforeCurrentPath === 'pconfig'){
              this.primaryLinks = this.pconfigLinks
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
  testLoader(){
    this.alert.startLoader('','','').subscribe()
  }

}
