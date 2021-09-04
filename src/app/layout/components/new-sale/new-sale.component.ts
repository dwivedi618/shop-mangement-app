import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent implements OnInit {
  filterOption : any
  value: any;
  isListView = false;
  primaryLinks = [
    { path: 'activity', icon: 'grid_view', name: 'Dashboard' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Product' },
    { path: 'groups', icon: 'groups', name: 'Customer' },
    { path: 'calls', icon: 'inventory', name: 'Purchase' },
    { path: 'sale', icon: 'sell', name: 'Sale' },
    { path: ':new', icon: 'undo', name: 'Return' },
    { path: 'files', icon: 'published_with_changes', name: 'Replace' },

    { path: 'files', icon: 'summarize', name: 'Report' },
    { path: 'files', icon: 'settings', name: 'Settings' },
  ];
  items = [
    {
      id : 1,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 199,
      description: '',
      code : ''
    },
    {
      id : 2,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 19,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 3,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 9,
      description: 'Strechable ,cotton febric,replacement,free delivery',
      code : 'ST2021APR'
    },{
      id : 4,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 5,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 6,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 7,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 8,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 9,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 10,
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },
  ];
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    // this.checkCustomer();
    // this.checkItemDetails();
    // this.checkServiceList()
  }
  checkCustomer() {
    const data = {};
    const dialogRef = this.dialog.open(AddUpdateCustomerComponent, {
      width: '30rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
  }
  checkItemDetails() {
    const data = {};
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
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

  getSearchText(searchText){
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return  this.filterOption
    }
  } 
}
