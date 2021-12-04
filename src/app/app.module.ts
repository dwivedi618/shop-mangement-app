import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/uicomponents/header/header.component';
import { AvatarComponent } from './layout/components/uicomponents/avatar/avatar.component';
import { LoginComponent } from './layout/components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSaleComponent } from './layout/components/newsell/new-sale/new-sale.component';
import { AddUpdateCustomerComponent } from './layout/components/customers/add-update-customer/add-update-customer.component';
import { SearchComponent } from './layout/components/uicomponents/search/search.component';
import { ItemDetailsComponent } from './layout/components/newsell/item-details/item-details.component';
import { ItemComponent } from './layout/components/newsell/item/item.component';
import { ItemTableViewComponent } from './layout/components/item-table-view/item-table-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ServiceListComponent } from './layout/components/service-list/service-list.component';
import { CartComponent } from './layout/components/newsell/cart/cart.component';
import { CustomerListComponent } from './layout/components/customers/customer-list/customer-list.component';
import { CustomerComponent } from './layout/components/customers/customer/customer.component';
import { InventoryComponent } from './layout/components/inventories/inventory/inventory.component';
import { InventoryItemComponent } from './layout/components/inventories/inventory-item/inventory-item.component';
import { InventoryItemDetailsComponent } from './layout/components/inventories/inventory-item-details/inventory-item-details.component';
import { HomeComponent } from './layout/components/home/home.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { ProductComponent } from './layout/components/products/product/product.component';
import { ProductItemComponent } from './layout/components/products/product-item/product-item.component';
import { ProductItemDetailsComponent } from './layout/components/products/product-item-details/product-item-details.component';
import { PhotoUploadComponent } from './layout/components/photo-upload/photo-upload.component';
import { CustomerDetailsComponent } from './layout/components/customers/customer-details/customer-details.component';
import { IPCService } from './services/ipc.service';
import { AddUpdateProductComponent } from './layout/components/products/add-update-product/add-update-product.component';
import { BillPreviewComponent } from './layout/components/newsell/bill-preview/bill-preview.component';
import { BreadcrumbComponent } from './layout/components/uicomponents/breadcrumb/breadcrumb.component';
import { NewOrderlayoutComponent } from './layout/components/newsell/new-orderlayout/new-orderlayout.component';
import { SettingsLayoutComponent } from './layout/components/settings/settings-layout/settings-layout.component';
import { GeneralSettingsComponent } from './layout/components/settings/general-settings/general-settings.component';
import { AppearanceSettingsComponent } from './layout/components/settings/appearance-settings/appearance-settings.component';
import { AlertComponent } from './layout/components/uicomponents/alert/alert.component';
import { AlertWithActionComponent } from './layout/components/uicomponents/alert-with-action/alert-with-action.component';
import { AlertService } from './services/alert.service';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountSettingsComponent } from './layout/components/settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './layout/components/auth/change-password/change-password.component';
import { DataMissingInstructionComponent } from './layout/components/data-missing-instruction/data-missing-instruction.component';
import { UtilityService } from './services/utility.service';
import { SellHistoryComponent } from './layout/components/sales/sell-history/sell-history.component';
import { SellListComponent } from './layout/components/sales/sell-list/sell-list.component';
import { SellItemComponent } from './layout/components/sales/sell-item/sell-item.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ApplyDiscountComponent } from './layout/components/apply-discount/apply-discount.component';
import { AddUpdateInventoryComponent } from './layout/components/inventories/add-update-inventory/add-update-inventory.component';
import { SelectionModelComponent } from './layout/components/selection-model/selection-model.component';
import { LoadingScreenComponent } from './layout/components/uicomponents/loading-screen/loading-screen.component';
import { TakePaymentComponent } from './layout/components/take-payment/take-payment.component';
import { FilterComponent } from './layout/components/filter/filter.component';
import { AppSetupComponent } from './layout/components/app-setup/app-setup.component';
import { BrandComponent } from './layout/components/pconfig/brand/brand.component';
import { PconfigLayoutComponent } from './layout/components/pconfig/pconfig-layout/pconfig-layout.component';
import { GarmentsCategoryComponent } from './layout/components/pconfig/garments-category/garments-category.component';
import { ColorComponent } from './layout/components/pconfig/color/color.component';
import { SizeComponent } from './layout/components/pconfig/size/size.component';
import { FilterPipe } from './customPipes/filter.pipe';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AddUpdateBrandComponent } from './layout/components/pconfig/add-update-brand/add-update-brand.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    AvatarComponent,
    LoginComponent,
    NewSaleComponent,
    AddUpdateCustomerComponent,
    SearchComponent,
    ItemDetailsComponent,
    ItemComponent,
    ItemTableViewComponent,

    ServiceListComponent,
    CartComponent,
    CustomerListComponent,
    CustomerComponent,
    InventoryComponent,
    InventoryItemComponent,
    InventoryItemDetailsComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    PhotoUploadComponent,
    CustomerDetailsComponent,
    AddUpdateProductComponent,
    BillPreviewComponent,
    BreadcrumbComponent,
    NewOrderlayoutComponent,
    SettingsLayoutComponent,
    GeneralSettingsComponent,
    AppearanceSettingsComponent,
    AlertComponent,
    AlertWithActionComponent,
    AccountSettingsComponent,
    ChangePasswordComponent,
    DataMissingInstructionComponent,
    SellHistoryComponent,
    SellListComponent,
    SellItemComponent,
    ApplyDiscountComponent,
    AddUpdateInventoryComponent,
    SelectionModelComponent,
    LoadingScreenComponent,
    TakePaymentComponent,
    FilterComponent,
    AppSetupComponent,
    BrandComponent,
    PconfigLayoutComponent,
    GarmentsCategoryComponent,
    ColorComponent,
    SizeComponent,
    FilterPipe,
    AddUpdateBrandComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMatSelectSearchModule
    // NgxImageCompressService
  ],
  providers: [IPCService, AlertService,UtilityService,NgxImageCompressService,
    {
      provide: MatSnackBarRef,
      useValue: {}
    },
    { provide: MatDialogRef, useValue: {} },

    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
