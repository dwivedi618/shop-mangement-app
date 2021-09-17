
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
import { DialogService } from 'src/app/services/dialog-service';

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
  constructor(private dialog : MatDialog,private dialogService : DialogService) {}
  ngOnChanges() {
    this.isListView = this.view;
    this.actionOnCustomerSelection = this.action
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.isListView = this.view;

  }

  onSelectItem(selectedCustomer) {
    this.openCustomerDetails(selectedCustomer)
  }

  openCustomerDetails(selectedCustomer){
    this.dialogService.checkCustomerDetails(selectedCustomer).subscribe(data=>{
      console.log("customer details",data);
      
    })
  }

  public onShareCart(){
    this.shareCart.emit(this.customerSelection)
  }
  
}