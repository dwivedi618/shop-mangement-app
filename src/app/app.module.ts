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
import { SaleComponent } from './layout/components/sale/sale.component';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';
import { AddUpdateCustomerComponent } from './layout/components/add-update-customer/add-update-customer.component';
import { SearchComponent } from './layout/components/search/search.component';
import { ItemDetailsComponent } from './layout/components/item-details/item-details.component';
import { ItemComponent } from './layout/components/item/item.component';
import { ItemTableViewComponent } from './layout/components/item-table-view/item-table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    AvatarComponent,
    LoginComponent,
    SaleComponent,
    NewSaleComponent,
    AddUpdateCustomerComponent,
    SearchComponent,
    ItemDetailsComponent,
    ItemComponent,
    ItemTableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
