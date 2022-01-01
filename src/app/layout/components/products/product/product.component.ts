
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Constant } from 'src/app/layout/constant/constant';
import { Product } from 'src/app/layout/models/product';
import { DialogService } from 'src/app/services/dialog-service';
import { FilterService } from 'src/app/services/filter.service';
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
  items:Product[] = [
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
  searchText:string | Array<{}>
  filterQuery: Map<string, Set<string>>;
  itemsCopy:Product[] = [];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private router: Router,
    private ipcService: IPCService,
    private filterService : FilterService
  ) { }
  ngOnInit(): void {
    this.fetchProduct();
    this.fetchDashboardReport();
    this.filterService.getData().subscribe((filter:Map<string,Set<string>>)=>{
      this.filterQuery = filter;
      if(!filter){ 
        return this.items = this.itemsCopy;
        console.log("clear filter",filter);
      }
      this.filterService.applyFilter(this.itemsCopy,filter);
    })
    this.filterService.getFilteredList().subscribe((filteredList:Product[]) =>{
      console.log("itemfilteredList product",filteredList);
      this.items = filteredList
    })
    
    this.breakpointObserver.observe([
      '(max-width: 1168px)'
        ]).subscribe(result => {
          if (result.matches) {
            console.log("media Query Matches");
            
            this.isListView = true
          } else {
            // if necessary:
            console.log("media Query Matches Not Matched")

          }
        });
       
  }

  private fetchProduct() {
    this.ipcService.database('product', 'fetch', '').then((res) => {
      if(res.status){
        this.items = res.data;
        this.itemsCopy = res.data;
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

  private fetchDashboardReport() {
    let today = new Date();
    let date2 = '01-12-2021'
    let lastMonth = new Date(date2);
    console.log("today",today);
    console.log("lastMonth",lastMonth);
    let dateRange = [date2,today]
    console.log("dateRange",dateRange);
    this.ipcService.dashboard(dateRange).then((res) => {
      if(res.status){
        this.items = res.data;
        this.itemsCopy = res.data;
        console.log("ftech dashboard", res);
      }
    })
  }
}
