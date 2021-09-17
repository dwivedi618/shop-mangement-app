import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { AddUpdateCustomerComponent } from '../layout/components/add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../layout/components/item-details/item-details.component';
import { ServiceListComponent } from '../layout/components/service-list/service-list.component';
import { InventoryItemDetailsComponent } from '../layout/components/inventory-item-details/inventory-item-details.component';
import { ProductItemDetailsComponent } from '../layout/components/product-item-details/product-item-details.component';
import { CustomerDetailsComponent } from '../layout/components/customer-details/customer-details.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogCloseData = new Subject;
  setData(data){
    this.dialogCloseData.next(data) 
  }
  resetData(){
    this.dialogCloseData.next()
  }

  constructor(private dialog : MatDialog) { }

  checkCustomer() : Observable<any> {
    let afterCloseData ;
    const data = {};
    const dialogRef = this.dialog.open(AddUpdateCustomerComponent, {
      width: '30rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });

    dialogRef.afterClosed().subscribe(result=>{
      this.setData(result);
    })
    
    return this.dialogCloseData.asObservable();
  }
  checkCustomerDetails(selectedCustomer) : Observable<any> {
    const data = {};
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: selectedCustomer,
    });

    dialogRef.afterClosed().subscribe(result=>{
      this.setData(result);
    })
    
    return this.dialogCloseData.asObservable();
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
  checkInventoryItemDetails() {
    const data = {};
    const dialogRef = this.dialog.open(InventoryItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.setData(result);
    })
    
    return this.dialogCloseData.asObservable();
  }

  checkProductItemDetails(selectedItem) {
    const data = {};
    const dialogRef = this.dialog.open(ProductItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: selectedItem,
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.setData(result);
    })
    
    return this.dialogCloseData.asObservable();
  }
  checkServiceList() {
    const data = {};
    const dialogRef = this.dialog.open(ServiceListComponent, {
      
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose : true,
      data: data,
    });
  }

}
