import { DialogService } from 'src/app/services/dialog-service';


import { MatDialog } from '@angular/material/dialog';

import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { InventoryItemDetailsComponent } from '../inventory-item-details/inventory-item-details.component';
import { IPCService } from 'src/app/services/ipc.service';

export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  mrp: any;
}
@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit ,OnChanges{
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() cartItems;
  @Input() view: Boolean;
  @Output() onDialogClose  = new EventEmitter<any>();



  items = [];
  isListView: Boolean;

  constructor(private dialog : MatDialog,private dialogService : DialogService,private ipcService : IPCService) {}
  ngOnChanges() {
    this.isListView = this.view;
    this.items = this.data;

    // this.checkItemDetails()
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.isListView = this.view;
    // console.log("data",this.data, this.isListView)
  }

  onSelectItem(selectedItem) {
    this.dialogService.checkInventoryItemDetails(selectedItem).subscribe(data=>{
      console.log("Inventory Item details",data);
      this.onDialogClose.emit(data)
    })
  }


  checkItemDetails() {
    const data = {};
    const dialogRef = this.dialog.open(InventoryItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
  }
}

