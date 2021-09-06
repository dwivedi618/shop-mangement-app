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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
