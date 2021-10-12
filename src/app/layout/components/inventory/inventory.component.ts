
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPCService } from 'src/app/services/ipc.service';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  filterOption: any
  value: any;
  isListView = false;
  garmentsCategory = [
    { path: 'activity', icon: 'grid_view', name: 'Saree' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Pants' },
    { path: 'calls', icon: 'inventory', name: 'Shirts' },
    { path: 'groups', icon: 'groups', name: 'Shoes' },
    { path: 'sale', icon: 'sell', name: 'Shoots' },

  ];
  items = [
    {
      id: 1,
      name: 'T-shirt',
      brand: 'Peter England',
      itemInStock: 26,
      pricePerItem: 400,
      totalStockPrice: 10400,
      lastUpdate: new Date(),
      description: '',
      code: ''
    },
    {
      id: 1,
      name: 'Flimingo Pink Saree',
      brand: 'Peter England',
      quantity: 26,
      pricePerItem: 400,
      stockPrice: 10400,
      lastUpdate: new Date(),
      description: '',
      code: ''
    },
  ];

  constructor(private dialog: MatDialog, private router: Router, private ipcService: IPCService) { }
  ngOnInit(): void {
    this.fetchIventory()
  }

  fetchIventory() {
    this.ipcService.database('inventory', 'fetch', '').then(data => {
      this.items = data
      console.log("fetch inventory", data);

    })
  }
  getSearchText(searchText) {
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return this.filterOption
    }
  }

  onDialogClose(data) {
    this.fetchIventory();
  }


}
