import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../../constant/constant';
import { AddUpdateCustomerComponent } from '../../customers/add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';


@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent implements OnInit {
  newOrderInstruction = {
    text1 : Constant.PRODUCT_MISSING_INS1,
    text2 : Constant.PRODUCT_MISSING_INS2,
    action : '../product'
  }
  
  filterOption : any
  value: any;
  isListView = false;
  garmentsCategory = [
    { path: 'activity', icon: 'grid_view', name: 'Saree' },
    { path: 'chats', icon: 'dry_cleaning', name: 'Pants' },
    { path: 'calls', icon: 'inventory', name: 'Shirts' },
    { path: 'groups', icon: 'groups', name: 'Shoes' },
    { path: 'sale', icon: 'sale', name: 'Shoots' },
  
  ];
  items = [
    {
      id: 1,
      name: "Jeans",
      brand: null,
      price: 897,
      discountInPercent: 0,
      discountInRuppee: 0,
      unit: 'meter',
      sellBy: false,
      grade: "grade 1",
      description: "no decription",
      productCode: null,
      make: "make 1",
      length: null,
      size: null,
    }
  ];
  cart = [];
  constructor(private dialog: MatDialog,
    private router : Router, 
    private alertService : AlertService,
    private ipcService : IPCService) {}
  ngOnInit(): void {

    let loadCart = JSON.parse(localStorage.getItem('currentCartDD'))
    this.cart = loadCart;

    this.fetchProduct();
  
  }
  private fetchProduct(){
    this.ipcService.database('product','fetch','').then((res)=>{
      if(res.status){
        this.items = res.data
        console.log("fetch inventory", res);
      }
    })
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
    this.alertService.alertActionDialog('Are you sure?',Constant.RESET_ORDER_WARNING_MSG,'Reset').subscribe(action =>{
      console.log("action----->",action)
      if(action == true){
        localStorage.removeItem('currentCartDD');
        localStorage.removeItem('currentCustomer');
        this.cart = [];
      }
    })
  }
  onApplyFilter(data){
    console.log("Filter Applied",data)
    this.items = data
  }
}
