import { LoginComponent } from './layout/components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSaleComponent } from './layout/components/new-sale/new-sale.component';
import { CartComponent } from './layout/components/cart/cart.component';
import { CustomerListComponent } from './layout/components/customer-list/customer-list.component';
import { InventoryComponent } from './layout/components/inventory/inventory.component';
import { HomeComponent } from './layout/components/home/home.component';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { ProductComponent } from './layout/components/product/product.component';
import { NewOrderlayoutComponent } from './layout/components/new-orderlayout/new-orderlayout.component';
import { GeneralSettingsComponent } from './layout/components/general-settings/general-settings.component';
import { SettingsLayoutComponent } from './layout/components/settings-layout/settings-layout.component';
import { AppearanceSettingsComponent } from './layout/components/appearance-settings/appearance-settings.component';
import { AuthGuard } from './auth.guard';
import { AccountSettingsComponent } from './layout/components/account-settings/account-settings.component';
import { SellListComponent } from './layout/components/sell-list/sell-list.component';
import { AppSetupComponent } from './layout/components/app-setup/app-setup.component';

const routes: Routes = [
  { path: '', component: AppSetupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' }  ,canActivate: [AuthGuard]},
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard', icon: 'grid_view' } },
      { path: 'inventory', component: InventoryComponent, data: { breadcrumb: 'Inventory', icon: 'inventory' } },
      { path: 'product', component: ProductComponent, data: { breadcrumb: 'Product', icon: 'dry_cleaning' } },
      { path: 'customer', component: CustomerListComponent, data: { breadcrumb: 'Customer', icon: 'groups' } },
      { path: 'sale', component: SellListComponent, data: { breadcrumb: 'Sale', icon: 'sell' } },
      {
        path: 'neworder', component: NewOrderlayoutComponent, data: { breadcrumb: 'New Order', icon: 'add', },
        children: [
          { path: '', component: NewSaleComponent },
          { path: 'neworder', component: NewSaleComponent, data: { breadcrumb: 'New Order', icon: 'add', } },
          { path: 'cart', component: CartComponent, data: { breadcrumb: 'Cart', icon: 'shopping_cart' } },
        ]
      },
      {
        path: 'settings', component: SettingsLayoutComponent, data: {
          breadcrumb: 'Settings', icon: 'settings',},
          children: [
            { path: '', component: GeneralSettingsComponent, data: { breadcrumb: 'General Settings', icon: 'settings', } },         
            { path: 'generalsettings', component: GeneralSettingsComponent, data: { breadcrumb: 'General Settings', icon: 'settings', } },
            { path: 'appearancesettings', component: AppearanceSettingsComponent, data: { breadcrumb: 'Appearance', icon: 'settings', } },
            { path: 'accountsettings', component: AccountSettingsComponent, data: { breadcrumb: 'Accounts', icon: 'admin_panel_settings', } },
            // { path: '', component: AccountSettingsComponent, data: { breadcrumb: 'Accounts', icon: 'admin_panel_settings', } },


          ]
        },

    // { path: 'cart',component:CartComponent ,data : {breadcrumb : 'Cart'}},
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
