import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { IPCService } from 'src/app/services/ipc.service';
import { GarmentsCategoryComponent } from '../pconfig/garment-categories/garments-category/garments-category.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dashboardCards = [
    // { id:1,label:'Product',total:'100',stock:'20',sold:'80' , percent:80 },
    // { id:1,label:'Customer',total:'7',inStock:null,sold:null },
    // { id:1,label:'Brand',total:'7',percent:45 },
    // { id:1,label:'Category',total:'7' },
  ]

  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  categoryList= [
    {
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
        ],
        "isEditEnable": false
    },
    {
        "id": 2,
        "name": "C2",
        "image": null,
        "createdAt": "2021-12-18T14:40:32.000Z",
        "updatedAt": "2021-12-18T14:40:32.000Z",
        "subCategories": [
            {
                "id": 7,
                "name": "c22",
                "createdAt": "2021-12-22T05:50:02.000Z",
                "updatedAt": "2021-12-22T05:50:02.000Z"
            },
            {
                "id": 8,
                "name": "c23",
                "createdAt": "2021-12-22T05:52:16.000Z",
                "updatedAt": "2021-12-22T05:52:16.000Z"
            }
        ],
        "isEditEnable": false
    },
    {
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
        ],
        "isEditEnable": false
    },
    {
        "id": 4,
        "name": "Saree",
        "image": null,
        "createdAt": "2021-12-26T16:41:06.000Z",
        "updatedAt": "2021-12-26T16:41:06.000Z",
        "subCategories": [
            {
                "id": 17,
                "name": "laxmipatii",
                "createdAt": "2021-12-30T09:00:12.000Z",
                "updatedAt": "2021-12-31T19:25:47.000Z"
            }
        ],
        "isEditEnable": false
    },
    {
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
            },
            {
                "id": 18,
                "name": "new suits",
                "createdAt": "2021-12-31T19:27:15.000Z",
                "updatedAt": "2021-12-31T19:27:15.000Z"
            }
        ],
        "isEditEnable": false
    },
    {
        "id": 6,
        "name": "Coat",
        "image": null,
        "createdAt": "2021-12-26T16:41:32.000Z",
        "updatedAt": "2021-12-26T16:41:32.000Z",
        "subCategories": [
            {
                "id": 14,
                "name": "w",
                "createdAt": "2021-12-26T16:41:32.000Z",
                "updatedAt": "2021-12-31T19:28:14.000Z"
            }
        ],
        "isEditEnable": false
    },
    {
        "id": 7,
        "name": "T-shirts",
        "image": null,
        "createdAt": "2021-12-26T16:42:03.000Z",
        "updatedAt": "2021-12-26T16:42:03.000Z",
        "subCategories": [
            {
                "id": 15,
                "name": null,
                "createdAt": "2021-12-26T16:42:03.000Z",
                "updatedAt": "2021-12-26T16:42:03.000Z"
            }
        ],
        "isEditEnable": false
    },
    {
        "id": 9,
        "name": "Paint",
        "image": null,
        "createdAt": "2022-01-01T14:15:00.000Z",
        "updatedAt": "2022-01-01T14:15:00.000Z",
        "subCategories": [
            {
                "id": 20,
                "name": "Jeans",
                "createdAt": "2022-01-01T14:15:43.000Z",
                "updatedAt": "2022-01-01T14:15:43.000Z"
            }
        ],
        "isEditEnable": false
    }
];
  salesAnalytics = [
    {
        "productCount": 12,
        "selledProductCount": 7,
        "categoryId": 1,
        "label": "C1",
        "total": 1,
        "sold": 7,
        "percent": "700%"
    },
    {
        "productCount": 0,
        "selledProductCount": 0,
        "categoryId": 2,
        "label": "C2",
        "total": 0,
        "sold": 0,
        "percent": "NaN%"
    },
    {
        "productCount": 100,
        "selledProductCount": 3,
        "categoryId": 3,
        "label": "New",
        "total": 1,
        "sold": 3,
        "percent": "300%"
    },
    {
        "productCount": 10,
        "selledProductCount": 5,
        "categoryId": 4,
        "label": "Saree",
        "total": 4,
        "sold": 5,
        "percent": "125%"
    },
    {
        "productCount": 1,
        "selledProductCount": 1,
        "categoryId": 5,
        "label": "Suits",
        "total": 1,
        "sold": 1,
        "percent": "100%"
    },
    {
        "productCount": 30,
        "selledProductCount": 0,
        "categoryId": 6,
        "label": "Coat",
        "total": 0,
        "sold": 0,
        "percent": "NaN%"
    },
    {
        "productCount": 0,
        "selledProductCount": 0,
        "categoryId": 7,
        "label": "T-shirts",
        "total": 0,
        "sold": 0,
        "percent": "NaN%"
    },
    {
        "productCount": 0,
        "selledProductCount": 0,
        "categoryId": 9,
        "label": "Paint",
        "total": 0,
        "sold": 0,
        "percent": "NaN%"
    }
]
  
dateRangeDropdowns = [
  { label : 'Today', icon : 'today' },
  { label : 'Yesterday',icon : 'calender_today' },
  { label : 'Last 7 days' ,icon : 'calender_view_week'},
  { label : 'Last 30 days',icon : 'calender_month' },

]
range = new FormGroup({
  start: new FormControl(),
  end: new FormControl(),
});
  constructor(private ipcService : IPCService) { }

  ngOnInit(): void {

  localStorage.removeItem('currentCartDD')
  localStorage.removeItem('currentCustomer')
  this.getCategoryList();
  this.fetchDashboardReport();
  // this.clockInterval = setInterval(this.clock,1000);
  this.salesAnalytics.forEach(sale => {
    sale['label'] = this.getCategoryName(sale.categoryId);
    sale['total'] = sale.productCount;
    sale['sold'] = sale.selledProductCount;
    sale['percent'] = (((sale.selledProductCount / sale.productCount) || 0 )* 100)+'';
  });
  console.log('salesAnalytics',this.salesAnalytics);
  
  }

  getCategoryList() {
    this.ipcService.database('category', 'fetch', '').then((res) => {
      if (res.status) {
        this.categoryList = res.data;
        console.log('data ng On changes', res);
      }
    });
  }

  getCategoryName(categoryId){
    return this.categoryList.find(list => list.id == categoryId)?.name
  }
  private fetchDashboardReport() {
    let today = new Date();
    let date2 = '01-12-2021'
    let lastMonth = new Date(date2);
    console.log("today",today);
    console.log("lastMonth",lastMonth);
    
    let dateRange = [this.range.value.start,this.range.value.end]
    
    console.log("dateRange",dateRange);
    this.ipcService.dashboard(dateRange).then((res) => {
      console.log("ftech dashboard********************************", res);
      this.salesAnalytics = res;
      this.salesAnalytics.forEach(sale => {
        sale['label'] = this.getCategoryName(sale.categoryId);
        sale['total'] = sale.productCount;
        sale['sold'] = sale.selledProductCount;
        sale['percent'] = (sale.selledProductCount / sale.productCount )* 100 +'%';
      });

      if(res.status){
        this.salesAnalytics = res.data;
      }
    })
  }
  onCustomDateApply(){
    this.fetchDashboardReport()
  }
}
