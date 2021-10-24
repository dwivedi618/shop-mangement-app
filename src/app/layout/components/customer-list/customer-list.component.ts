
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';

import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

export interface Actions {
  clearSelection: Function,
  deleteSelection: Function,
}
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  CUSTOMER_MISSING = Constant.CUSTOMER_MISSING
  filterOption: any
  value: any;
  isListView = false;
  cutomerCategory = Constant.CUSTOMER_CATEGORY
  cutomerCategoryByGender = Constant.CATEGORY_BY_GENDER
  cutomerCategoryByAlphabet = Constant.CATEGORY_BY_ALPHABET

  customerSelectionAction: Actions[] = [

  ]
  items = [
  ];
  cart = [];
  action = [

  ]
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private dialogService : DialogService,
    public ipcService: IPCService
  ) { }
  ngOnInit(): void {
    this.fetchCustomer();
  }

  private fetchCustomer(){
    this.ipcService.database('customer', 'fetch', "").then(
      res => {
        if(res.status){
          this.items = res.data
          console.log("data ng On changes", res)
        }
      }
    )
  }

  openAddUpdateCustomer() {
      this.dialogService.checkCustomer('').subscribe(data1 => {
        console.log("received from update cart customer", data1);
        this.fetchCustomer();
      })
  }



  getSearchText(searchText) {
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return this.filterOption
    }
  }

  onCartData(cartItems) {
    this.cart = cartItems;
    console.log("cart into parent", this.cart)
  }

  onDialogClose(data){
    console.log("after close**********************",data);
      this.fetchCustomer();
  }
}
