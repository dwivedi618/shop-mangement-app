import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  garmentsCategory = [
    { path: 'activity', icon: 'grid_view', name: 'Saree' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Pants' },
    { path: 'calls', icon: 'inventory', name: 'Shirts' },
    { path: 'groups', icon: 'groups', name: 'Shoes' },
    { path: 'sale', icon: 'sell', name: 'Shoots' },
  
  ];
  items = [
    {
      id : 1,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 199,
      
      description: '',
      code : ''
    },
    {
      id : 2,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 19,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 3,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 9,
      description: 'Strechable ,cotton febric,replacement,free delivery',
      code : 'ST2021APR'
    },{
      id : 4,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 5,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 6,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 7,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 8,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 9,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },{
      id : 10,
      name: 'T-shirt',
      brand: 'Peter England',
      mrp: 1199,
      description: 'Strechable ,cotton febric',
      code : 'ST2021APR'
    },
  ];
  cart = [];
  constructor(private dialog: MatDialog,private router : Router) {}
  ngOnInit(): void {
    let loadCart = JSON.parse(localStorage.getItem('currentCartDD'))
    this.cart = loadCart
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
