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

interface CategoryList extends Pcategory {
  isEditEnable?: boolean;
}
@Component({
  selector: 'app-garments-category',
  templateUrl: './garments-category.component.html',
  styleUrls: ['./garments-category.component.scss'],
})
export class GarmentsCategoryComponent implements OnInit {
  newGarmentCategory: string;

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
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Fruit loops' },
      ],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
        },
      ],
    },
  ];
  categoryList: CategoryList[] = [];
  isNewAddEnable: Boolean = false;
  isEditEnable: boolean = false;
  newCategory: string;
  searchText: string;
  treeControl = new NestedTreeControl<any>((node) => node.subCategroies);
  dataSource = new MatTreeNestedDataSource<any>();
  hasChild = (_: number, node: any) =>
    !!node.subCategroies && node.subCategroies.length > 0;
  constructor(
    private alertService: AlertService,
    private ipcService: IPCService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.categoryList = DefinedCategory.all;
    this.categoryList.forEach((item) => (item['isEditEnable'] = false));
    this.dataSource.data = this.categoryList;

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

  onOpenDialog = () => {
    let config: MatDialogConfig = {
      width: '30rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose: true,
    };

    this.dialogService
      .openMatDialog(AddUpdateCategoryComponent, {}, config)
      .subscribe(() => {
        this.getCategoryList();
      });
  };
  onSearch = (searchText: string) => {
    this.searchText = searchText;
  };
}
