
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

export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  mrp: any;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit ,OnChanges{
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() action;
  @Input() view: Boolean;
  @Output() shareCart  = new EventEmitter<any>();



  items = [];
  isListView: Boolean;

  actionOnCustomerSelection ;
  customerSelection = [];
  constructor(private dialog : MatDialog) {}
  ngOnChanges() {
    this.isListView = this.view;
    this.actionOnCustomerSelection = this.action
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.isListView = this.view;

  }

  onSelectItem(selectedItem) {
    console.log('HHHHHHHHAARRRRRRRRBAARRA');
    if (this.customerSelection.length > 0) {
      this.customerSelection.find((item) => item.id == selectedItem.id)
        ? this.customerSelection
        : this.customerSelection.unshift(selectedItem);
    } else {
      this.customerSelection.unshift(selectedItem);
    }
    this.onShareCart()
  }
  isSelected(selection) {
    if(this.customerSelection.length){
      for (let i = 0; i < this.customerSelection.length; i++) {
        if (this.customerSelection[i]['id'] == selection.id) {
          return true;
        }
      }
    }else{
      return false
    }
  }
  public onShareCart(){
    this.shareCart.emit(this.customerSelection)
  }
  checkItemDetails() {
    const data = {};
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
  }
}
