
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-sell-list',
  templateUrl: './sell-list.component.html',
  styleUrls: ['./sell-list.component.scss']
})
export class SellListComponent implements OnInit {
  SELL_MISSING = Constant.SALE_MISSING
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
  forTestingData = JSON.stringify({
    "id": 2,
    "receiptNumber": "RCN1634826598181",
    "discount": 0,
    "finalPayableAmount": 10796.4,
    "receivedAmount": 10000.4,
    "paymentMode": "cash",
    "lastPaymentDate": "2021-10-21T14:30:19.651Z",
    "selledDate": "2021-10-21T14:30:19.000Z",
    "updatedAt": "2021-10-21T14:30:19.000Z",
    "customer": {
        "id": 2,
        "name": "Nikhil ojha",
        "photo": null,
        "phone": "7827459618",
        "gender": "male",
        "address": "bankatiya dubey",
        "createdAt": "2021-10-21T14:29:55.000Z",
        "updatedAt": "2021-10-21T14:29:55.000Z"
    },
    "selledProducts": [
        {
            "id": 1,
            "quantity": 4,
            "price": 2999,
            "fixedDiscount": 10,
            "specialDiscount": 0,
            "item": {
                "id": 1,
                "name": "jeans",
                "productCode": null,
                "brand": null,
                "price": 2999,
                "discountInPercent": 10,
                "discountInRuppee": 299.9,
                "unit": "piece",
                "sellBy": "false",
                "grade": "new",
                "description": "no description",
                "make": "make",
                "length": null,
                "size": null,
                "image": null,
                "createdAt": "2021-10-19T17:37:55.000Z",
                "updatedAt": "2021-10-19T17:48:23.000Z"
            }
        },
        {
          "id": 1,
          "quantity": 4,
          "price": 2999,
          "fixedDiscount": 10,
          "specialDiscount": 0,
          "item": {
              "id": 1,
              "name": "jeans",
              "productCode": null,
              "brand": null,
              "price": 2999,
              "discountInPercent": 10,
              "discountInRuppee": 299.9,
              "unit": "piece",
              "sellBy": "false",
              "grade": "new",
              "description": "no description",
              "make": "make",
              "length": null,
              "size": null,
              "image": null,
              "createdAt": "2021-10-19T17:37:55.000Z",
              "updatedAt": "2021-10-19T17:48:23.000Z"
          }
      },
      {
        "id": 1,
        "quantity": 4,
        "price": 2999,
        "fixedDiscount": 10,
        "specialDiscount": 0,
        "item": {
            "id": 1,
            "name": "jeans",
            "productCode": null,
            "brand": null,
            "price": 2999,
            "discountInPercent": 10,
            "discountInRuppee": 299.9,
            "unit": "piece",
            "sellBy": "false",
            "grade": "new",
            "description": "no description",
            "make": "make",
            "length": null,
            "size": null,
            "image": null,
            "createdAt": "2021-10-19T17:37:55.000Z",
            "updatedAt": "2021-10-19T17:48:23.000Z"
        }
    },
    {
      "id": 1,
      "quantity": 4,
      "price": 2999,
      "fixedDiscount": 10,
      "specialDiscount": 0,
      "item": {
          "id": 1,
          "name": "jeans",
          "productCode": null,
          "brand": null,
          "price": 2999,
          "discountInPercent": 10,
          "discountInRuppee": 299.9,
          "unit": "piece",
          "sellBy": "false",
          "grade": "new",
          "description": "no description",
          "make": "make",
          "length": null,
          "size": null,
          "image": null,
          "createdAt": "2021-10-19T17:37:55.000Z",
          "updatedAt": "2021-10-19T17:48:23.000Z"
      }
  },
  {
    "id": 1,
    "quantity": 4,
    "price": 2999,
    "fixedDiscount": 10,
    "specialDiscount": 0,
    "item": {
        "id": 1,
        "name": "jeans",
        "productCode": null,
        "brand": null,
        "price": 2999,
        "discountInPercent": 10,
        "discountInRuppee": 299.9,
        "unit": "piece",
        "sellBy": "false",
        "grade": "new",
        "description": "no description",
        "make": "make",
        "length": null,
        "size": null,
        "image": null,
        "createdAt": "2021-10-19T17:37:55.000Z",
        "updatedAt": "2021-10-19T17:48:23.000Z"
    }
},
{
  "id": 1,
  "quantity": 4,
  "price": 2999,
  "fixedDiscount": 10,
  "specialDiscount": 0,
  "item": {
      "id": 1,
      "name": "jeans",
      "productCode": null,
      "brand": null,
      "price": 2999,
      "discountInPercent": 10,
      "discountInRuppee": 299.9,
      "unit": "piece",
      "sellBy": "false",
      "grade": "new",
      "description": "no description",
      "make": "make",
      "length": null,
      "size": null,
      "image": null,
      "createdAt": "2021-10-19T17:37:55.000Z",
      "updatedAt": "2021-10-19T17:48:23.000Z"
  }
},
{
  "id": 1,
  "quantity": 4,
  "price": 2999,
  "fixedDiscount": 10,
  "specialDiscount": 0,
  "item": {
      "id": 1,
      "name": "jeans",
      "productCode": null,
      "brand": null,
      "price": 2999,
      "discountInPercent": 10,
      "discountInRuppee": 299.9,
      "unit": "piece",
      "sellBy": "false",
      "grade": "new",
      "description": "no description",
      "make": "make",
      "length": null,
      "size": null,
      "image": null,
      "createdAt": "2021-10-19T17:37:55.000Z",
      "updatedAt": "2021-10-19T17:48:23.000Z"
  }
},
{
  "id": 1,
  "quantity": 4,
  "price": 2999,
  "fixedDiscount": 10,
  "specialDiscount": 0,
  "item": {
      "id": 1,
      "name": "jeans",
      "productCode": null,
      "brand": null,
      "price": 2999,
      "discountInPercent": 10,
      "discountInRuppee": 299.9,
      "unit": "piece",
      "sellBy": "false",
      "grade": "new",
      "description": "no description",
      "make": "make",
      "length": null,
      "size": null,
      "image": null,
      "createdAt": "2021-10-19T17:37:55.000Z",
      "updatedAt": "2021-10-19T17:48:23.000Z"
  }
},
{
  "id": 1,
  "quantity": 4,
  "price": 2999,
  "fixedDiscount": 10,
  "specialDiscount": 0,
  "item": {
      "id": 1,
      "name": "jeans",
      "productCode": null,
      "brand": null,
      "price": 2999,
      "discountInPercent": 10,
      "discountInRuppee": 299.9,
      "unit": "piece",
      "sellBy": "false",
      "grade": "new",
      "description": "no description",
      "make": "make",
      "length": null,
      "size": null,
      "image": null,
      "createdAt": "2021-10-19T17:37:55.000Z",
      "updatedAt": "2021-10-19T17:48:23.000Z"
  }
}
    ]
}) as string
  data = JSON.parse(this.forTestingData)
  items = [
  //  this.data
  ]
  constructor(private dialog: MatDialog, private router: Router, private ipcService: IPCService) { }
  ngOnInit(): void {
    // console.log("sell list",this.items,this.data)//for testing
    this.fetchSellList()
  }

  fetchSellList() {
    this.ipcService.database('sell', 'fetch', '').then(data => {
      this.items = data
      console.log("fetch sell", data);

    })
  }
  getSearchText(searchText) {
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return this.filterOption
    }
  }

  onDialogClose(data) {
    this.fetchSellList();
  }


}

