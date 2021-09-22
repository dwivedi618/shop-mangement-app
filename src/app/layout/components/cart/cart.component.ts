
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
  discountInRuppee: number;
  discountInPercent: number;
  cartAmount: number;
  finalPayableAmount:number
  constructor(private dialog: MatDialog,private dialogService : DialogService) {}
  ngOnInit(): void {
    console.log("NG ON IN IT TTTTTTTTTTTTTTT");

    let loadCart = JSON.parse(localStorage.getItem('currentCartDD'))
    this.cart = loadCart
    console.log("load cart from local storage",loadCart)
   
    this.onTakePayment()
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
    console.log("CARTTTTTTTTTTT");
    let cartAmount = 0 ;
    for(let i=0;i<this.cart.length;i++){
      cartAmount = cartAmount + (this.cart[i].priceAfterDiscount)*this.cart[i].quantity
      // console.log(this.cart[i]);
      
    }
    this.cartAmount = cartAmount
    this.getFinalPayableAmount()
    return cartAmount
  }

  onDiscountChanged(price:number,discountValue : number,type : string){
    if(type == 'percent'){
      this.discountInRuppee = Math.round((price * discountValue/100)*100)/100;
      this.discountInPercent = discountValue;
    }else{
      this.discountInRuppee = discountValue
      this.discountInPercent = Math.round((discountValue * 100 /price)*100)/100 
    }
  }

  getFinalPayableAmount(){
    return new Promise((resolve,reject)=>{
      console.log("this.cartAmount ",this.cartAmount );
      
      this.finalPayableAmount = this.cartAmount - (this.discountInRuppee || 0);
      resolve( this.finalPayableAmount)
    })
  }

  async onTakePayment(){
    let billingInfo = <any>{};
    billingInfo.cartItem = this.cart;
    billingInfo.customer = 'Shivam Dwivedi'
    billingInfo.phone = '7827458618'
    billingInfo.address = 'C/o Shivam dwivedi ,Bankatiya Dubey,deoria UP'
    billingInfo.discountInRuppee = this.discountInRuppee
    billingInfo.discountInPercent = this.discountInPercent
    billingInfo.finalPayableAmount = await this.getFinalPayableAmount();
    this.dialogService.openBillPreview(billingInfo).subscribe(data=>{
      console.log("bill Preview Closed",data);
    })
  }
}
