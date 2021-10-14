
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-sell-list',
  templateUrl: './sell-list.component.html',
  styleUrls: ['./sell-list.component.scss']
})
export class SellListComponent implements OnInit {
  SELL_MISSING = Constant.SALE_MISSING
  filterOption: any
  value: any;
  isListView = false;
  garmentsCategory = [
    { path: 'activity', icon: 'grid_view', name: 'Saree' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Pants' },
    { path: 'calls', icon: 'inventory', name: 'Shirts' },
    { path: 'groups', icon: 'groups', name: 'Shoes' },
    { path: 'sale', icon: 'sale', name: 'Shoots' },

  ];
  items = []
  constructor(private dialog: MatDialog, private router: Router, private ipcService: IPCService) { }
  ngOnInit(): void {
    this.fetchSellList()
  }

  fetchSellList() {
    this.ipcService.database('sell', 'fetch', '').then(data => {
      this.items = data
      console.log("fetch sell", data);

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
    this.fetchSellList();
  }


}

