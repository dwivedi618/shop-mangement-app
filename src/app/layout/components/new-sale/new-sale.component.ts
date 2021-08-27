import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent implements OnInit {
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
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },
    {
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric,replacement,free delivery',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      name: 'T-shirt',
      brand: 'Peter England',
      sellingPrice: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
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
}
