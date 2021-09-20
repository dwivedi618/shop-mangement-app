import { MatDialog } from '@angular/material/dialog';

import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ItemDetailsComponent } from '../item-details/item-details.component';

export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  price: number;
  discountInPercent: any;
  discountInRuppee: any;
  priceAfterDiscount : number;

}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() cartItems;
  @Input() view: Boolean;
  @Output() shareCart  = new EventEmitter<any>();



  items = [];
  isListView: Boolean;
  cart = [];
  constructor(private dialog : MatDialog) {}
  ngOnChanges() {
    this.isListView = this.view;
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.cart = this.cartItems?.length ? this.cartItems : [];
    this.isListView = this.view;
    // console.log("data",this.data, this.isListView)
  }

  onSelectItem(selectedItem) {
    console.log('HHHHHHHHAARRRRRRRRBAARRA');
    let cartItem = <CardItem>{};
    cartItem.id = selectedItem?.id;
    cartItem.item = selectedItem;
    cartItem.quantity = 1;
    cartItem.price = selectedItem?.price;
    cartItem.discountInRuppee = selectedItem?.discountInRuppee;
    cartItem.priceAfterDiscount = selectedItem?.price - selectedItem?.discountInRuppee;


    if (this.cart.length > 0) {
      this.cart.find((item) => item.id == cartItem.id)
        ? this.cart
        : this.cart.unshift(cartItem);
    } else {
      this.cart.unshift(cartItem);
    }
    // for(let i=0;i<this.cart.length;i++){
    //   if(this.cart[i]['id'] == selectedItem.id){
    //     return true
    //   }
    // }
    console.log('cart', this.cart);
    this.onShareCart()
  }

  isAddedToCart(item) {
    if(this.cart.length){
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i]['id'] == item.id) {
          return true;
        }
      }
    }else{
      return false
    }
  }
  adjustCartItemQuantity(adjustType: number, selectedItem: any) {
    console.log('ADJUST VLUSIE IS ==============',adjustType);
    
    if (adjustType === 0) {
      //decrease cart item quantity
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == selectedItem.id) {
          ( this.cart[i].quantity > 1 ) ? this.cart[i].quantity-- : this.cart.splice(i,1);
          // console.log('SELCYTY___________',selectedItem,"-----------",i,'---',this.cart.length);
          return;
        }
      }
    }
    if (adjustType === 1) {
      //increase cart item quantity
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == selectedItem.id) {
          return (this.cart[i].quantity += 1);
        }
      }
    }
  }
  onCartItemQuantityChange(newQuantity,itemId){
    
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['id'] == itemId) {
        //do not change quantity if new Quantity is less than 1
        ( newQuantity < 1  ) ? (this.cart[i].quantity = 1) :  (this.cart[i].quantity = newQuantity);
        console.log("new Quantity-----------",this.cart[i].quantity)
      }
    }
  }
  getThisItemQuantity(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['id'] == id) {
        console.log('calculating size', this.cart[i].quantity);
        return this.cart[i].quantity;
      }
    }
  }

  public onShareCart(){
    console.log("emit------------ cart" ,this.cart.length)
    this.shareCart.emit(this.cart)
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
