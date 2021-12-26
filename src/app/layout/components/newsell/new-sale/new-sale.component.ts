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
  items =[
    {
        "id": 1,
        "name": "c1 B1 S,M,XL",
        "productCode": null,
        "image": null,
        "price": 10000,
        "discountInPercent": null,
        "discountInRuppee": null,
        "unit": null,
        "sellBy": null,
        "description": "No de",
        "length": null,
        "stock": 5,
        "createdAt": "2021-12-18T14:42:54.000Z",
        "updatedAt": "2021-12-18T14:42:54.000Z",
        "category": {
            "id": 1,
            "name": "C1",
            "image": null,
            "createdAt": "2021-12-18T14:40:22.000Z",
            "updatedAt": "2021-12-18T14:40:22.000Z",
            "subCategories": [
                {
                    "id": 11,
                    "name": "C12",
                    "createdAt": "2021-12-22T09:38:46.000Z",
                    "updatedAt": "2021-12-22T09:38:46.000Z"
                },
                {
                    "id": 6,
                    "name": "c11",
                    "createdAt": "2021-12-22T05:44:18.000Z",
                    "updatedAt": "2021-12-22T05:44:18.000Z"
                }
            ]
        },
        "subCategory": null,
        "brand": {
            "id": 1,
            "name": "B1",
            "image": null,
            "createdAt": "2021-12-18T14:40:07.000Z",
            "updatedAt": "2021-12-18T14:40:07.000Z"
        },
        "colors": [
            {
                "id": 1,
                "name": "red",
                "code": "#cb2525",
                "createdAt": "2021-12-18T14:40:50.000Z",
                "updatedAt": "2021-12-18T14:40:50.000Z"
            },
            {
                "id": 2,
                "name": "Blue",
                "code": "#5837cd",
                "createdAt": "2021-12-18T14:41:09.000Z",
                "updatedAt": "2021-12-18T14:41:09.000Z"
            },
            {
                "id": 3,
                "name": "Black",
                "code": "#000000",
                "createdAt": "2021-12-18T14:41:24.000Z",
                "updatedAt": "2021-12-18T14:41:24.000Z"
            }
        ],
        "sizes": [
            {
                "id": 1,
                "name": "S",
                "createdAt": "2021-12-18T14:41:35.000Z",
                "updatedAt": "2021-12-18T14:41:35.000Z"
            },
            {
                "id": 2,
                "name": "M",
                "createdAt": "2021-12-18T14:41:42.000Z",
                "updatedAt": "2021-12-18T14:41:42.000Z"
            },
            {
                "id": 3,
                "name": "XL",
                "createdAt": "2021-12-18T14:41:48.000Z",
                "updatedAt": "2021-12-18T14:41:48.000Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "red blue new sub new",
        "productCode": null,
        "image": null,
        "price": 100000,
        "discountInPercent": null,
        "discountInRuppee": null,
        "unit": "piece",
        "sellBy": null,
        "description": null,
        "length": null,
        "stock": 10,
        "createdAt": "2021-12-22T16:13:31.000Z",
        "updatedAt": "2021-12-22T16:13:31.000Z",
        "category": {
            "id": 3,
            "name": "New",
            "image": null,
            "createdAt": "2021-12-21T16:13:18.000Z",
            "updatedAt": "2021-12-21T16:13:18.000Z",
            "subCategories": [
                {
                    "id": 9,
                    "name": "new 4",
                    "createdAt": "2021-12-22T06:07:37.000Z",
                    "updatedAt": "2021-12-22T06:07:37.000Z"
                },
                {
                    "id": 10,
                    "name": "new 5",
                    "createdAt": "2021-12-22T06:13:46.000Z",
                    "updatedAt": "2021-12-22T06:13:46.000Z"
                },
                {
                    "id": 4,
                    "name": "new sub 5",
                    "createdAt": "2021-12-21T17:06:41.000Z",
                    "updatedAt": "2021-12-21T17:06:41.000Z"
                },
                {
                    "id": 1,
                    "name": "subNew",
                    "createdAt": "2021-12-21T16:13:18.000Z",
                    "updatedAt": "2021-12-21T16:13:18.000Z"
                },
                {
                    "id": 5,
                    "name": "vinak",
                    "createdAt": "2021-12-22T05:37:24.000Z",
                    "updatedAt": "2021-12-22T05:37:24.000Z"
                }
            ]
        },
        "subCategory": {
            "id": 1,
            "name": "subNew",
            "createdAt": "2021-12-21T16:13:18.000Z",
            "updatedAt": "2021-12-21T16:13:18.000Z"
        },
        "brand": {
            "id": 1,
            "name": "B1",
            "image": null,
            "createdAt": "2021-12-18T14:40:07.000Z",
            "updatedAt": "2021-12-18T14:40:07.000Z"
        },
        "colors": [
            {
                "id": 1,
                "name": "red",
                "code": "#cb2525",
                "createdAt": "2021-12-18T14:40:50.000Z",
                "updatedAt": "2021-12-18T14:40:50.000Z"
            },
            {
                "id": 2,
                "name": "Blue",
                "code": "#5837cd",
                "createdAt": "2021-12-18T14:41:09.000Z",
                "updatedAt": "2021-12-18T14:41:09.000Z"
            }
        ],
        "sizes": [
            {
                "id": 1,
                "name": "S",
                "createdAt": "2021-12-18T14:41:35.000Z",
                "updatedAt": "2021-12-18T14:41:35.000Z"
            },
            {
                "id": 2,
                "name": "M",
                "createdAt": "2021-12-18T14:41:42.000Z",
                "updatedAt": "2021-12-18T14:41:42.000Z"
            },
            {
                "id": 3,
                "name": "XL",
                "createdAt": "2021-12-18T14:41:48.000Z",
                "updatedAt": "2021-12-18T14:41:48.000Z"
            }
        ]
    }
]
  cart = [];
  searchText: string;
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
  onSearch = (searchText:string)=>{
    this.searchText = searchText
  }
}
