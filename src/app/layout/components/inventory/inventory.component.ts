
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
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
      itemInStock : 26,
      pricePerItem : 400,
      totalStockPrice : 10400,
      lastUpdate : new Date(),
      description: '',
      code : ''
    },
    {
      id : 1,
      name: 'Flimingo Pink Saree',
      brand: 'Peter England',
      quantity : 26,
      pricePerItem : 400,
      stockPrice : 10400,
      lastUpdate : new Date(),
      description: '',
      code : ''
    },
  ];
  cart = [];
  constructor(private dialog: MatDialog,private router : Router) {}
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
