import { LoginComponent } from './layout/components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';
import { SaleListComponent } from './layout/components/sale-list/sale-list.component';
import { CartComponent } from './layout/components/cart/cart.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: '', component:LayoutComponent,
  children : [
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
