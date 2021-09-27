import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { AvatarComponent } from './layout/components/avatar/avatar.component';
import { LoginComponent } from './layout/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';
import { AddUpdateCustomerComponent } from './layout/components/add-update-customer/add-update-customer.component';
import { SearchComponent } from './layout/components/search/search.component';
import { ItemDetailsComponent } from './layout/components/item-details/item-details.component';
import { ItemComponent } from './layout/components/item/item.component';
import { ItemTableViewComponent } from './layout/components/item-table-view/item-table-view.component';
import { SaleListComponent } from './layout/components/sale-list/sale-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewOrderCategoryComponent } from './layout/components/new-order-category/new-order-category.component';
import { ServiceListComponent } from './layout/components/service-list/service-list.component';
import { CartComponent } from './layout/components/cart/cart.component';
import { CustomerListComponent } from './layout/components/customer-list/customer-list.component';
import { CustomerComponent } from './layout/components/customer/customer.component';
import { InventoryComponent } from './layout/components/inventory/inventory.component';
import { InventoryItemComponent } from './layout/components/inventory-item/inventory-item.component';
import { InventoryItemDetailsComponent } from './layout/components/inventory-item-details/inventory-item-details.component';
import { HomeComponent } from './layout/components/home/home.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { ProductComponent } from './layout/components/product/product.component';
import { ProductItemComponent } from './layout/components/product-item/product-item.component';
import { ProductItemDetailsComponent } from './layout/components/product-item-details/product-item-details.component';
import { PhotoUploadComponent } from './layout/components/photo-upload/photo-upload.component';
import { CustomerDetailsComponent } from './layout/components/customer-details/customer-details.component';
import { IPCService } from './services/ipc.service';
import { AddUpdateProductComponent } from './layout/components/add-update-product/add-update-product.component';
import { BillPreviewComponent } from './layout/components/bill-preview/bill-preview.component';
import { BreadcrumbComponent } from './layout/components/breadcrumb/breadcrumb.component';
import { NewOrderlayoutComponent } from './layout/components/new-orderlayout/new-orderlayout.component';
import { SettingsLayoutComponent } from './layout/components/settings-layout/settings-layout.component';
import { GeneralSettingsComponent } from './layout/components/general-settings/general-settings.component';
import { AppearanceSettingsComponent } from './layout/components/appearance-settings/appearance-settings.component';

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
    SaleListComponent,
    NewOrderCategoryComponent,
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
    MatSortModule
  ],
  providers: [IPCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
