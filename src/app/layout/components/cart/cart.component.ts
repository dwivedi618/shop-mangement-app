
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';
import { DialogService } from 'src/app/services/dialog-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  filterOption : any
  value: any;
  isListView = false;
  cart = [];
  currentCustomer: any;
  constructor(private dialog: MatDialog,private dialogService : DialogService) {}
  ngOnInit(): void {
    let loadCart = JSON.parse(localStorage.getItem('currentCartDD'))
    this.cart = loadCart
    console.log("load cart from local storage",loadCart)
    this.checkCustomer();
    // this.checkItemDetails();
    // this.checkServiceList()
  }
  checkCustomer() {
    this.dialogService.checkCustomer().subscribe(data=>{
      console.log("received data",data);
      this.currentCustomer = data
    })
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
      cartAmount = cartAmount + (this.cart[i].priceAfterDiscount)*this.cart[i].quantity
      // console.log(this.cart[i]);
      
    }
    return cartAmount
  }
}
