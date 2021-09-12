
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
      discountInPercentage : 3,
      discountInRuppee : 5.97,
      offerPrice : 193.03,
      grade : 'A grade',
      description: 'Wine Purple Woven Kanjivaram Saree - Special Wedding Edition',
      code : '',
      make : '',
      size : '',
    },

  ];
  cart = [];
  constructor(private dialog: MatDialog,private router : Router) {}
  ngOnInit(): void {

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
      cartAmount = cartAmount + Number((this.cart[i].mrp) || 0)*Number(this.cart[i].quantity)
      // console.log(this.cart[i]);
      
    }
    console.log("cartAmount",cartAmount)
    return cartAmount
  }

  onViewCart(){
    localStorage.setItem('currentCartDD',JSON.stringify(this.cart))
    this.router.navigate(['../cart']);
  }
}
