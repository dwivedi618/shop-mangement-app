
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  missingDataInstruction = {
    text1 : Constant.PRODUCT_MISSING_INS1,
    text2 : Constant.PRODUCT_MISSING_INS2,
    action : '../product'
  }
  
  filterOption: any
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
   

  ];
  cart = [];
  constructor(private dialog: MatDialog,
    private dialogService: DialogService,
    private router: Router,
    private ipcService: IPCService
  ) { }
  ngOnInit(): void {
    this.fetchProduct();
  }

  private fetchProduct() {
    this.ipcService.database('product', 'fetch', '').then((res) => {
      if(res.status){
        this.items = res.data;
        console.log("ftech product", res);
      }
    })
  }
  openAddUpdateProduct() {
    this.dialogService.addUpdateProduct('').subscribe((data) => {
      console.log("after close",data);
      
      this.fetchProduct();
    })
  }

  getSearchText(searchText) {
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return this.filterOption
    }
  }

  onCartData(cartItems) {
    this.cart = cartItems;
    console.log("cart into parent", this.cart)
  }
  getCartTotal() {
    let cartAmount = 0;
    for (let i = 0; i < this.cart.length; i++) {
      cartAmount = cartAmount + Number((this.cart[i].mrp) || 0) * Number(this.cart[i].quantity)
      // console.log(this.cart[i]);

    }
    console.log("cartAmount", cartAmount)
    return cartAmount
  }

  onViewCart() {
    localStorage.setItem('currentCartDD', JSON.stringify(this.cart))
    this.router.navigate(['../cart']);
  }
  onDialogClose(data){
    console.log("after close**********************",data);
      this.fetchProduct();
  }

  onApplyFilter(data){
    console.log("Filter Applied",data)
    this.items = data
  }
}
