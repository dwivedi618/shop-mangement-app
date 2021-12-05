
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../../constant/constant';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  INVENTORY_MISSING = Constant.INVENTORY_MISSING
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
   
  ]
  constructor(private dialog: MatDialog,
     private router: Router, 
     private dialogService : DialogService,
     private ipcService: IPCService) { }
  ngOnInit(): void {
    this.fetchIventory();
  }

  fetchIventory() {
    this.ipcService.database('inventory', 'fetch', '').then(res => {
      if(res.status){
        this.items = res.data
        console.log("fetch inventory", res);
      }
    })
  }

  openAddUpdateInventory() {
    this.dialogService.addUpdateInventory('').subscribe((data) => {
      console.log("after close",data);
      this.fetchIventory();
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
    this.fetchIventory();
  }

  onApplyFilter(data){
    console.log("Filter Applied",data)
    this.items = data
  }

}