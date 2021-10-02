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
      name: 'Saree',
      brand: 'Peter England',
      salePrice: 199,
      discountInPercent : 3,
      discountInRuppee : 5.79,
      price : 193.03,
      unit : 'piece',
      isSellByMeter : 'true',
      grade : 'A grade',
      description: 'Wine Purple Woven Kanjivaram Saree - Special Wedding Edition',
      code : '',
      make : 'Make for this item',
      length : '',
      size : '',
    },
    {
      id : 2,
      name: 'Saree',
      brand: 'Peter England',
      salePrice: 199,
      discountInPercent : 3,
      discountInRuppee : 5.79,
      price : 193.03,
      unit : 'meter',
      isSellByMeter : 'false',
      grade : 'A grade',
      description: 'Wine Purple Woven Kanjivaram Saree - Special Wedding Edition',
      code : '',
      make : 'Make for this item',
      length : '',
      size : '',
    },
  ];
  cart = [];
  constructor(private dialog: MatDialog,private router : Router) {}
  ngOnInit(): void {
    // localStorage.removeItem('currentCartDD')
    let loadCart = JSON.parse(localStorage.getItem('currentCartDD'))
    this.cart = loadCart;
    // console.log("recent cart",this.cart);
    
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
    // console.log("cart into parent",this.cart)
  }
  getCartTotal(){
    let cartAmount = 0 ;
    for(let i=0;i<this.cart.length;i++){
      cartAmount = cartAmount + Number((this.cart[i].priceAfterDiscount) || 0)*Number(this.cart[i].quantity)
      // console.log(this.cart[i]);
      
    }
    // console.log("cartAmount",cartAmount)
    return cartAmount
  }

  onViewCart(){
    localStorage.setItem('currentCartDD',JSON.stringify(this.cart))
    this.router.navigate(['neworder/cart']);
  }
  onResetOrder(){
    localStorage.removeItem('currentCartDD')
    this.cart = [];
  }
}
