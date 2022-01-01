import { DefinedCategory } from './../../../../../fakedata/categories';

import { IPCService } from './../../../../../services/ipc.service';
import { Pcategory } from './../../../../models/pcategory';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/layout/constant/constant';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog-service';
import { AddUpdateCategoryComponent } from '../add-update-category/add-update-category.component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { category } from 'electron/db';
import { Category } from 'electron/entities/category';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface CategoryList extends Pcategory {
  isEditEnable?: boolean;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

@Component({
  selector: 'app-garments-category',
  templateUrl: './garments-category.component.html',
  styleUrls: ['./garments-category.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GarmentsCategoryComponent implements OnInit {
  newGarmentCategory: string;
  subCategoryName : string;
  dataSource1 : any;
  columnsToDisplay = ['name',  'action'];
  expandedElement: Category | null;
  data = [
    { id: 1, name: 'HRX', isEditEnable: false },
    { id: 1, name: 'HERE & NOW ', isEditEnable: false },
    { id: 1, name: 'HRX', isEditEnable: false },

    { id: 1, name: 'HRX', isEditEnable: false },
    { id: 1, name: 'HRX', isEditEnable: false },
    { id: 1, name: 'HRX', isEditEnable: false },
    { id: 1, name: 'HRX', isEditEnable: false },
  ];
  TREE_DATA = [
    {
        "id": 1,
        "name": "C1",
        "image": null,
        "createdAt": "2021-12-18T14:40:22.000Z",
        "updatedAt": "2021-12-18T14:40:22.000Z",
        "subCategories": [
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
    }
]
  categoryList: CategoryList[] = [];
  isNewAddEnable: Boolean = false;
  isEditEnable: boolean = false;
  newCategory: string;
  searchText: string;
  treeControl = new NestedTreeControl<any>((node) => node.subCategories);
  dataSource = new MatTreeNestedDataSource<any>();
  hasChild = (_: number, node: any) =>
    !!node.subCategories && node.subCategories.length >= 0;
  newSubCategory: any;
  constructor(
    private alertService: AlertService,
    private ipcService: IPCService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.categoryList = DefinedCategory.all;
    this.categoryList.forEach((item) => {
      item['isEditEnable'] = false
      item.subCategories.forEach(sub => sub['isEditEnable'] = false)
    });
    this.dataSource.data = this.categoryList;
    this.dataSource1 = this.TREE_DATA


    this.getCategoryList();
    console.log(this.treeControl);
  }

  getCategoryList() {
    this.ipcService.database('category', 'fetch', '').then((res) => {
      if (res.status) {
        this.categoryList = res.data;
        console.log('data ng On changes', res);
        this.categoryList.forEach((item) => (item['isEditEnable'] = false));
        this.dataSource.data = this.categoryList;
        this.dataSource1 = this.categoryList;

      }
    });
  }

  onNewSave = (newCategory) => {
    this.ipcService.database('category', 'create', newCategory).then((res) => {
      if (res.status) {
        this.alertService.alert('Item Added Successfully', 'close');
        this.getCategoryList();
        this.isNewAddEnable = false;
        this.newGarmentCategory = '';
      }
    });
  };

  onFocusBrandName = (id: Number) => {
    // alert("id")
    this.categoryList.forEach((brand) => {
      if (brand.id == id) {
        brand.isEditEnable = true;
        return;
      }
    });
  };

  onSave = (data: CategoryList) => {
    console.table(data);
    this.ipcService.database('category', 'update', data).then((res) => {
      if (res.status) {
        this.getCategoryList();
        console.log('data ng On changes', res);
      }
    });
  };
  onDelete = (data) => {
    let deleteC = () => {
      this.ipcService.database('category', 'delete', data).then((res) => {
        if (res.status) {
          this.alertService.alert('Item deleted successfully', 'close');
          this.getCategoryList();
        }
      });
      this.categoryList.pop();
    };
    this.alertService
      .alertActionDialog('Delete', 'Are you sure ?', 'Yes! Delete')
      .subscribe((result) => {
        result ? deleteC() : '';
      });
  };

  onOpenDialog = (data:Category) => {
    let config: MatDialogConfig = {
      width: '50rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose: true,
    };

    const category =  data.id ? data : {}
    this.dialogService
      .openMatDialog(AddUpdateCategoryComponent, category, config)
      .subscribe(() => {
        this.getCategoryList();
      });
  };
  onSearch = (searchText: string) => {
    this.searchText = searchText;
  };

  onInputChange(categoryId,newSubCategory){
    console.log("new subcategort",categoryId,newSubCategory);
    this.newSubCategory = { categoryId : categoryId , name : newSubCategory }
    console.log("data 1",this.newSubCategory);
  }

  onSubCatInputChange(subCategoryId,newName:string){
    console.log("new subcategort",subCategoryId,newName);
    this.newSubCategory = { id : subCategoryId , name : newName }
    console.log("data 1",this.newSubCategory);
  }

  onSubmitSubCategory(){
    let action : string = 'create' || 'update'
    if(this.newSubCategory.id){
      action = 'update';
    }else {
      action = 'create';
    }
    this.ipcService.database('subCategory',action,this.newSubCategory).then(res =>{
      if (res.status) {
        console.log("subcategory add res",res);
        // const resData = res.data
        // const categoryId =  resData.categoryId
        // const recentAddedSubCategory = { id : resData.id , name : resData.name }
        // this.categoryList.forEach(category=>{
        //   if(category.id == categoryId){
        //     category.subCategories.push(recentAddedSubCategory)
        //   }
        // });
        // this.dataSource.data = this.categoryList
        // console.log("subcategory push to list",this.categoryList);

        this.getCategoryList();
      }
    })
  }

}
