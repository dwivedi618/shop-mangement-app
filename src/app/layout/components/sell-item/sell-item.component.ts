
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
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ProductItemDetailsComponent } from '../product-item-details/product-item-details.component';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  mrp: any;
}
@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.scss']
})
export class SellItemComponent implements OnInit,OnChanges {
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() cartItems;
  @Input() view: Boolean;
  @Output() shareCart  = new EventEmitter<any>();
  @Output() onDialogClose  = new EventEmitter<any>();




  items = [];
  isListView: Boolean;
  cart = [];
  constructor(private dialog : MatDialog,private dialogService : DialogService) {}
  ngOnChanges() {
    this.isListView = this.view;
    this.items = this.data;
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.cart = this.cartItems?.length ? this.cartItems : [];
    this.isListView = this.view;
    // console.log("data",this.data, this.isListView)
  }

  onSelectItem(selectedItem) {
    this.openAddUpdateProduct(selectedItem);
  }

  openProductItemDetails(selectedItem){
    this.dialogService.checkProductItemDetails(selectedItem).subscribe(data=>{
      console.log("product item details ",data)
      data == 'update' ? this.openAddUpdateProduct(selectedItem) : doNothing()
    })

    function doNothing(){
      return
    }
  }

  openAddUpdateProduct(selectedItem){
    selectedItem.action = 'update'
    selectedItem.cartItem = selectedItem.selledProducts
    this.dialogService.openBillPreview(selectedItem).subscribe(result=>{
      this.onDialogClose.emit(result)
    })
  }
}

