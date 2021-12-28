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
import { ItemDetailsComponent } from '../../newsell/item-details/item-details.component';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../../constant/constant';
import { Customer } from '../../../models/customer';
import { AddUpdateCustomerComponent } from '../add-update-customer/add-update-customer.component';
import { AlertService } from 'src/app/services/alert.service';

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
  @Output() onDialogClose  = new EventEmitter<any>();
  items = [];
  isListView: Boolean;
  pageInfo = 'Mange customer '
  actionOnCustomerSelection ;
  customerSelection = [];
  constructor(
    private dialog : MatDialog,
    private dialogService : DialogService,
    private ipcService: IPCService,
    private alertService : AlertService
  ) {
    
  }
  ngOnChanges() {
    this.isListView = this.view;
    this.items = this.data;
    this.actionOnCustomerSelection = this.action;
    // console.log("data ng On changes",this.data, this.isListView)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.isListView = this.view;
  }

  onSelectItem(selectedCustomer) {
    this.openAddUpdateCustomer(selectedCustomer)
  }

  openAddUpdateCustomer(selectedCustomer){
    let customer = selectedCustomer
    customer.action = 'update'
    this.dialogService.checkCustomer(AddUpdateCustomerComponent,customer).subscribe(data=>{
      console.log("customer update",data);
      this.onDialogClose.emit(data)
    })
  }

  openCustomerDetails(selectedCustomer){
    this.dialogService.checkCustomerDetails(selectedCustomer).subscribe(data=>{
      console.log("customer details",data);
      if(data== 'update'){
        this.openAddUpdateCustomer(selectedCustomer);
      }
    })
  }

  public onShareCart(){
    this.shareCart.emit(this.customerSelection)
  }

  onDelete = selectedItem =>{
    const data = selectedItem; 
    let deleteItem = ()=>{
      this.ipcService.database('customer','delete',data)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item deleted successfully','close');
          this.items = this.items.filter(item => item.id != data.id)
        }
      })
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deleteItem() : '';
    })
  }

  
  
}