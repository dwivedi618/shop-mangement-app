import { LoginComponent } from './layout/components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';
import { SaleListComponent } from './layout/components/sale-list/sale-list.component';
import { CartComponent } from './layout/components/cart/cart.component';
import { CustomerListComponent } from './layout/components/customer-list/customer-list.component';
import { InventoryComponent } from './layout/components/inventory/inventory.component';
import { HomeComponent } from './layout/components/home/home.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { ProductComponent } from './layout/components/product/product.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: '',component:HomeComponent },
  { path: '', component:LayoutComponent,
  children : [
    { path: 'dashboard',component:DashboardComponent },
    { path: 'inventory',component:InventoryComponent },
    { path: 'product',component:ProductComponent },
    { path: 'customer',component:CustomerListComponent },
    { path: 'sale',component:SaleListComponent },
    { path: 'neworder',component:NewSaleComponent },
    { path: 'cart',component:CartComponent },


  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
