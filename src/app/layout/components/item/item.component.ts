import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges,
} from '@angular/core';
export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  mrp: any;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() view: Boolean;

  items = [];
  isListView: Boolean;
  cart = [];
  constructor() {}
  ngOnChanges() {
    this.isListView = this.view;
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.isListView = this.view;
    // console.log("data",this.data, this.isListView)
  }

  onSelectItem(selectedItem) {
    let cartItem = <CardItem>{};
    cartItem.id = selectedItem?.id;
    cartItem.item = selectedItem;
    cartItem.quantity = 1;
    cartItem.mrp = selectedItem?.mrp;

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
    if (adjustType === 0) {
      //decrease cart item quantity
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == selectedItem.id) {
          if(this.cart[i].quantity == 1){
            // this.cart.splice(i,1);
            // this.cart = this.cart.slice(i,2);
            // console.log("splice result",sliceResult);
            console.log("reducer cart",this.cart);
          }
          return this.cart[i].quantity -= 1;
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
  getThisItemQuantity(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['id'] == id) {
        console.log('calculating size', this.cart[i].quantity);
        return this.cart[i].quantity;
      }
    }
  }
}
