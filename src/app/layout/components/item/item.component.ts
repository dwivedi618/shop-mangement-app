
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
  @Output() shareCart  = new EventEmitter<any>();



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
    console.log('HHHHHHHHAARRRRRRRRBAARRA');
    
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
          console.log('SELCYTY___________',selectedItem,"-----------",i,'---',this.cart[i].quantity);
          
          ( this.cart[i].quantity > 1 ) ? this.cart[i].quantity-- : this.cart.splice(i,1);
          console.log('SELCYTY___________',selectedItem,"-----------",i,'---',this.cart.length);

          return;
          // if(this.cart[i].quantity == 1){
          //   // delete this.cart[i]
          //   this.cart.splice(i,1);
          //   // this.cart = this.cart.slice(i,2);
          //   // console.log("splice result",sliceResult);
          //   console.log("reducer cart--------------",this.cart.length);
          //   this.onShareCart()
          // }else{
          //   this.cart[i].quantity--;
          // }
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

  public onShareCart(){
    console.log("emit------------ cart" ,this.cart.length)
    this.shareCart.emit(this.cart)
  }
}
