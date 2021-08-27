import { LoginComponent } from './layout/components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './layout/components/sale/sale.component';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: '', component:LayoutComponent,
  children : [
    { path: 'sale',component:SaleComponent },
    { path: 'neworder',component:NewSaleComponent }

  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
