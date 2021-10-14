
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  cutomerCategory = [
    { path: 'activity', icon: 'grid_view', name: 'Regular' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Verified' },
    { path: 'calls', icon: 'inventory', name: 'New' },
    { path: 'calls', icon: 'inventory', name: 'Due Payments' },

  ];
  cutomerCategoryByGender = [
    { path: 'activity', icon: 'grid_view', name: 'Male' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Female' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Other' },
  ];
  cutomerCategoryByAlphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

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
    public ipcService: IPCService
  ) { }
  ngOnInit(): void {
   
    this.fetchCustomer();
    // this.checkItemDetails();

  }
  private fetchCustomer(){
    this.ipcService.database('customer', 'fetch', "").then(
      data => {
        this.items = data
        console.log("data ng On changes", data)
      }
    )
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
  getCartTotal() {
    let cartAmount = 0;
    for (let i = 0; i < this.cart.length; i++) {
      cartAmount = cartAmount + (this.cart[i].mrp) * this.cart[i].quantity
      // console.log(this.cart[i]);
    }
    return cartAmount
  }

  onViewCart() {
    localStorage.setItem('currentCartDD', JSON.stringify(this.cart))
    this.router.navigate(['../cart']);
  }

  onDialogClose(data){
    console.log("after close**********************",data);
      this.fetchCustomer();
  }
}
