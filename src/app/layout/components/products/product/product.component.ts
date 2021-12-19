
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constant } from 'src/app/layout/constant/constant';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';

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
            "updatedAt": "2021-12-18T14:40:22.000Z"
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
    }
]
  cart = [];
  searchText:string | Array<{}>
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

  onSearchEvent(searchText) {
   this.searchText = searchText;
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
