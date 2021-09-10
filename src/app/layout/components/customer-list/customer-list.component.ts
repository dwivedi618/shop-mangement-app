
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

export interface Actions{
  clearSelection : Function,
  deleteSelection : Function,
}
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  filterOption : any
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
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  customerSelectionAction : Actions[] = [
    
  ]
  items = [
    {
      id : 1,
      name: 'Prahlat Pandey',
      phone: '7827458618',
      address: 'Nanital outer post,pin 200989,UttraKhand',
      description: '',
      photo : '../../../../assets/images/cool-background.png',
      debt : 100
    },
    {
      id : 2,
      name: 'Munmun Singh',
      phone: '7827458618',
      address: 'PratapChhapar , pin 274708,bhatpar rani ,deoria UP',
      description: '',
      photo : '../../../../assets/images/cool-background.png',
      debt : 0
    },
    {
      id : 3,
      name: 'Ramnaresh Chaudhray',
      phone: '7827458618',
      address: 'Khorabar ,pin 200989,Deoria U.P',
      description: '',
      photo : '../../../../assets/images/cool-background.png',
      debt : 3400
    },
  ];
  cart = [];
  action  = [
  
  ]
  constructor(private dialog: MatDialog,private router : Router) {}
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

  onCartData(cartItems){
    this.cart = cartItems;
    console.log("cart into parent",this.cart)
  }
  getCartTotal(){
    let cartAmount = 0 ;
    for(let i=0;i<this.cart.length;i++){
      cartAmount = cartAmount + (this.cart[i].mrp)*this.cart[i].quantity
      // console.log(this.cart[i]);
      
    }
    return cartAmount
  }

  onViewCart(){
    localStorage.setItem('currentCartDD',JSON.stringify(this.cart))
    this.router.navigate(['../cart']);
  }
}
