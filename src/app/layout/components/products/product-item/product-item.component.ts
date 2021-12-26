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
import { FilterService } from 'src/app/services/filter.service';
import { Product } from 'src/app/layout/models/product';
import { AlertService } from 'src/app/services/alert.service';
import { IPCService } from 'src/app/services/ipc.service';


export interface CardItem {
  id: number;
  item: any;
  name: string;
  quantity: number;
  mrp: any;
}
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit,OnChanges {
  @ViewChild('decreamentbtn') decreamentbtn;
  @Input() data;
  @Input() cartItems;
  @Input() searchText;

  @Input() view: Boolean;
  @Output() shareCart  = new EventEmitter<any>();
  @Output() onDialogClose  = new EventEmitter<any>();



  showInfo : boolean = true;
  items = [];
  isListView: Boolean;
  cart = [];
  receivedSearchText: any;
  filter: Map<string, Set<string>>;
  filterQuery: Map<string, Set<string>>;
  constructor(private dialog : MatDialog,
    private dialogService : DialogService,
    private alertService : AlertService,
    private ipcService : IPCService,
    private filterService:FilterService) {}
  ngOnChanges() {
    this.isListView = this.view;
    this.items = this.data;
    this.receivedSearchText = this.searchText;

    console.log("this.searchText",this.receivedSearchText)
  }
  ngOnInit(): void {
    this.items = this.data;
    this.cart = this.cartItems?.length ? this.cartItems : [];
    this.isListView = this.view;
    this.receivedSearchText = this.searchText;

    // console.log("data",this.data, this.isListView)
    this.filterService.getData().subscribe((filter:Map<string,Set<string>>)=>{
      this.filterQuery = filter
    })
    setTimeout(()=>{ this.showInfo = false },5000)
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
    this.dialogService.addUpdateProduct(selectedItem).subscribe(result=>{
      this.onDialogClose.emit(result)
    })
  }

  onDelete = product =>{
    const data = product; 
    let deleteItem = ()=>{
      this.ipcService.database('product','delete',data)
      .then(res=>{
        if(res.status){
          this.alertService.alert('Item deleted successfully','close');
          this.items = this.items.filter(item => item.id != product.id)
        }
      })
    }
    this.alertService.alertActionDialog('Delete','Are you sure ?','Yes! Delete')
    .subscribe(result=>{
      result ? deleteItem() : '';
    })
  }
}
