import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { AddUpdateCustomerComponent } from '../layout/components/add-update-customer/add-update-customer.component';
import { ItemDetailsComponent } from '../layout/components/item-details/item-details.component';
import { ServiceListComponent } from '../layout/components/service-list/service-list.component';
import { InventoryItemDetailsComponent } from '../layout/components/inventory-item-details/inventory-item-details.component';
import { ProductItemDetailsComponent } from '../layout/components/product-item-details/product-item-details.component';
import { CustomerDetailsComponent } from '../layout/components/customer-details/customer-details.component';
import { AddUpdateProductComponent } from '../layout/components/add-update-product/add-update-product.component';
import { BillPreviewComponent } from '../layout/components/bill-preview/bill-preview.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogCloseData = new Subject;
  setData(data) {
    this.dialogCloseData.next(data)
  }
  resetData() {
    this.dialogCloseData.next()
  }

  constructor(private dialog: MatDialog) { }

  checkCustomer(data): Observable<any> {

    let afterCloseResult = new Subject;
    const cdialogRef = this.dialog.open(AddUpdateCustomerComponent, {
      width: '30rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
    cdialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })
    return afterCloseResult.asObservable();
  }

  checkCustomerDetails(selectedCustomer): Observable<any> {
    let afterCloseResult = new Subject;
    const data = {};
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: selectedCustomer,
    });
    dialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })
    return afterCloseResult.asObservable();
  }

  checkItemDetails() {
    let afterCloseResult = new Subject;
    const data = {};
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
  }

  checkInventoryItemDetails(data) {
    let afterCloseResult = new Subject;
    const dialogRef = this.dialog.open(InventoryItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })
    return afterCloseResult.asObservable();
  }

  checkProductItemDetails(selectedItem) {
    let afterCloseResult = new Subject;
    const data = {};
    const dialogRef = this.dialog.open(ProductItemDetailsComponent, {
      width: '40rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: selectedItem,
    });
    dialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })
    return afterCloseResult.asObservable();
  }

  addUpdateProduct(selectedItem) {
    let afterCloseResult = new Subject;
    const data = {};
    const dialogRef = this.dialog.open(AddUpdateProductComponent, {
      width: '70rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      data: selectedItem,
    });
    dialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })

    return afterCloseResult.asObservable();
  }

  checkServiceList() {
    let afterCloseResult = new Subject;
    const data = {};
    const dialogRef = this.dialog.open(ServiceListComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      disableClose: true,
      data: data,
    });
  }

  openBillPreview(billingInfo) {
    let afterCloseResult = new Subject;
    const data = {};
    const bdialogRef = this.dialog.open(BillPreviewComponent, {
      width: '70rem',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      data: billingInfo,
    });
    bdialogRef.afterClosed().subscribe(result => {
      afterCloseResult.next(result)
    })
    return afterCloseResult.asObservable();
  }

}
