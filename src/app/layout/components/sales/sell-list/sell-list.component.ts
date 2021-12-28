
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../../constant/constant';


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
    {
        "id": 1,
        "receiptNumber": "RCN1640103007166",
        "discount": 0,
        "finalPayableAmount": 10000,
        "receivedAmount": 10000,
        "paymentMode": "cash",
        "lastPaymentDate": "2021-12-21T16:10:12.850Z",
        "selledDate": "2021-12-21T16:10:12.000Z",
        "updatedAt": "2021-12-21T16:10:12.000Z",
        "customer": {
            "id": 1,
            "name": "shivam dwivedi",
            "photo": null,
            "phone": "7827458618",
            "gender": "male",
            "address": "Bankatiya",
            "createdAt": "2021-12-19T05:36:34.000Z",
            "updatedAt": "2021-12-19T05:36:34.000Z"
        },
        "selledProducts": [
            {
                "id": 1,
                "quantity": 1,
                "price": 10000,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
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
                }
            }
        ],
        "payments": [
            {
                "id": 1,
                "amount": 10000,
                "paymentMode": "cash",
                "description": null,
                "paymentDate": "2021-12-21T16:10:12.000Z"
            }
        ]
    },
    {
        "id": 2,
        "receiptNumber": "RCN1640547570301",
        "discount": 0,
        "finalPayableAmount": 117400,
        "receivedAmount": 110000,
        "paymentMode": "upi",
        "lastPaymentDate": "2021-12-26T19:40:14.435Z",
        "selledDate": "2021-12-26T19:40:14.000Z",
        "updatedAt": "2021-12-26T19:40:14.000Z",
        "customer": {
            "id": 1,
            "name": "shivam dwivedi",
            "photo": null,
            "phone": "7827458618",
            "gender": "male",
            "address": "Bankatiya",
            "createdAt": "2021-12-19T05:36:34.000Z",
            "updatedAt": "2021-12-19T05:36:34.000Z"
        },
        "selledProducts": [
            {
                "id": 2,
                "quantity": 1,
                "price": 700,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
                    "id": 6,
                    "name": "New Product",
                    "productCode": null,
                    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAEAsMDgwKEA4NDhIREBMYKBoYFhYYMSMlHSg6Mz08OTM4N0BIXE5ARFdFNzhQbVFXX2JnaGc+TXF5cGR4XGVnY//bAEMBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIBdwF3AMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIDBAUGB//EAEMQAQACAQICBgUJBwMDBQEBAAABAgMEEQUxEhMhQVFxBjJhgZEiM0JScqGxwdEUNUNic4LhIzSSFURTg6Ky8PEkY//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACYRAQACAQUAAgMBAQEBAQAAAAABAhEDEhMxUSFBBBQyYSJSQjP/2gAMAwEAAhEDEQA/AP0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z",
                    "price": 700,
                    "discountInPercent": null,
                    "discountInRuppee": null,
                    "unit": "piece",
                    "sellBy": null,
                    "description": null,
                    "length": 10,
                    "stock": 10,
                    "createdAt": "2021-12-26T18:06:19.000Z",
                    "updatedAt": "2021-12-26T18:06:19.000Z",
                    "category": {
                        "id": 4,
                        "name": "Saree",
                        "image": null,
                        "createdAt": "2021-12-26T16:41:06.000Z",
                        "updatedAt": "2021-12-26T16:41:06.000Z",
                        "subCategories": [
                            {
                                "id": 12,
                                "name": null,
                                "createdAt": "2021-12-26T16:41:06.000Z",
                                "updatedAt": "2021-12-26T16:41:06.000Z"
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
                        "id": 4,
                        "name": "Kaveri",
                        "image": null,
                        "createdAt": "2021-12-26T16:42:45.000Z",
                        "updatedAt": "2021-12-26T16:42:45.000Z"
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
                        }
                    ]
                }
            },
            {
                "id": 4,
                "quantity": 1,
                "price": 1200,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
                    "id": 4,
                    "name": "Saree Mathli",
                    "productCode": null,
                    "image": null,
                    "price": 1200,
                    "discountInPercent": null,
                    "discountInRuppee": null,
                    "unit": null,
                    "sellBy": null,
                    "description": null,
                    "length": null,
                    "stock": null,
                    "createdAt": "2021-12-26T16:45:29.000Z",
                    "updatedAt": "2021-12-26T16:45:29.000Z",
                    "category": {
                        "id": 4,
                        "name": "Saree",
                        "image": null,
                        "createdAt": "2021-12-26T16:41:06.000Z",
                        "updatedAt": "2021-12-26T16:41:06.000Z",
                        "subCategories": [
                            {
                                "id": 12,
                                "name": null,
                                "createdAt": "2021-12-26T16:41:06.000Z",
                                "updatedAt": "2021-12-26T16:41:06.000Z"
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
                        "id": 5,
                        "name": "Mathli",
                        "image": null,
                        "createdAt": "2021-12-26T16:42:53.000Z",
                        "updatedAt": "2021-12-26T16:42:53.000Z"
                    },
                    "colors": [
                        {
                            "id": 5,
                            "name": "Brown",
                            "code": "#ad775e",
                            "createdAt": "2021-12-26T16:39:13.000Z",
                            "updatedAt": "2021-12-26T16:39:13.000Z"
                        },
                        {
                            "id": 6,
                            "name": "Yellow",
                            "code": "#f5d400",
                            "createdAt": "2021-12-26T16:39:51.000Z",
                            "updatedAt": "2021-12-26T16:39:51.000Z"
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
                        }
                    ]
                }
            },
            {
                "id": 3,
                "quantity": 1,
                "price": 5500,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
                    "id": 5,
                    "name": "All season ",
                    "productCode": null,
                    "image": null,
                    "price": 5500,
                    "discountInPercent": null,
                    "discountInRuppee": null,
                    "unit": "piece",
                    "sellBy": null,
                    "description": null,
                    "length": null,
                    "stock": 5,
                    "createdAt": "2021-12-26T16:47:18.000Z",
                    "updatedAt": "2021-12-26T16:47:18.000Z",
                    "category": {
                        "id": 5,
                        "name": "Suits",
                        "image": null,
                        "createdAt": "2021-12-26T16:41:20.000Z",
                        "updatedAt": "2021-12-26T16:41:20.000Z",
                        "subCategories": [
                            {
                                "id": 13,
                                "name": null,
                                "createdAt": "2021-12-26T16:41:20.000Z",
                                "updatedAt": "2021-12-26T16:41:20.000Z"
                            },
                            {
                                "id": 16,
                                "name": "Peter suits",
                                "createdAt": "2021-12-26T19:36:02.000Z",
                                "updatedAt": "2021-12-26T19:36:02.000Z"
                            }
                        ]
                    },
                    "subCategory": null,
                    "brand": {
                        "id": 3,
                        "name": "B3",
                        "image": null,
                        "createdAt": "2021-12-26T16:37:57.000Z",
                        "updatedAt": "2021-12-26T16:37:57.000Z"
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
                        },
                        {
                            "id": 4,
                            "name": "Green",
                            "code": "#00a853",
                            "createdAt": "2021-12-26T16:38:54.000Z",
                            "updatedAt": "2021-12-26T16:38:54.000Z"
                        },
                        {
                            "id": 5,
                            "name": "Brown",
                            "code": "#ad775e",
                            "createdAt": "2021-12-26T16:39:13.000Z",
                            "updatedAt": "2021-12-26T16:39:13.000Z"
                        },
                        {
                            "id": 6,
                            "name": "Yellow",
                            "code": "#f5d400",
                            "createdAt": "2021-12-26T16:39:51.000Z",
                            "updatedAt": "2021-12-26T16:39:51.000Z"
                        },
                        {
                            "id": 7,
                            "name": "Orange",
                            "code": "#f78318",
                            "createdAt": "2021-12-26T16:40:22.000Z",
                            "updatedAt": "2021-12-26T16:40:22.000Z"
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
            },
            {
                "id": 6,
                "quantity": 1,
                "price": 10000,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
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
                }
            },
            {
                "id": 5,
                "quantity": 1,
                "price": 100000,
                "fixedDiscount": 0,
                "specialDiscount": 0,
                "item": {
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
            }
        ],
        "payments": [
            {
                "id": 2,
                "amount": 110000,
                "paymentMode": "upi",
                "description": null,
                "paymentDate": "2021-12-26T19:40:14.000Z"
            }
        ]
    }
]
  constructor(private dialog: MatDialog, private router: Router, private ipcService: IPCService) { }
  ngOnInit(): void {
    // console.log("sell list",this.items,this.data)//for testing
    this.fetchSellList()
  }

  fetchSellList() {
    this.ipcService.database('sell', 'fetch', '').then(res => {
      if(res.status){
        this.items = res.data
        console.log("fetch inventory", res);
      }
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

  onApplyFilter(data){
    console.log("Filter Applied",data)
    this.items = data
  }

}

