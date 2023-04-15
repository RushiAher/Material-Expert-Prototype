import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { DashboardionComponent } from './components/user/dashboardion/dashboardion.component';
import { MatrialSelectionComponent } from './components/user/matrial-selection/matrial-selection.component';
import { MatrialProcurementComponent } from './components/user/matrial-procurement/matrial-procurement.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { BussinessInfoComponent } from './components/vendor/bussiness-info/bussiness-info.component';
import { VendorDashboardComponent } from './components/vendor/vendor-dashboard/vendor-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VendorProfileComponent } from './components/vendor/vendor-profile/vendor-profile.component';
import { OrdersComponent } from './components/vendor/orders/orders.component';
import { AddProductComponent } from './components/vendor/add-product/add-product.component';
import { ProductListComponent } from './components/vendor/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardLayoutComponent,
    DashboardionComponent,
    MatrialSelectionComponent,
    MatrialProcurementComponent,
    SettingsComponent,
    UserProfileComponent,
    BussinessInfoComponent,
    VendorDashboardComponent,
    NavbarComponent,
    VendorProfileComponent,
    OrdersComponent,
    AddProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
