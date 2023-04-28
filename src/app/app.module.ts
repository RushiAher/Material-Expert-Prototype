import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { window } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { DashboardionComponent } from './components/user/dashboardion/dashboardion.component';
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
import { AnalyticsComponent } from './components/user/analytics/analytics.component';
import { VendorMatrialRequestComponent } from './components/user/vendor-matrial-request/vendor-matrial-request.component';
import { CheckOutComponent } from './components/user/check-out/check-out.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { TrackOrderComponent } from './components/user/track-order/track-order.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { MaterialExpertComponent } from './components/user/material-expert/material-expert.component';
import { ExpertsComponent } from './components/experts/experts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardLayoutComponent,
    DashboardionComponent,
    MatrialProcurementComponent,
    SettingsComponent,
    UserProfileComponent,
    BussinessInfoComponent,
    VendorDashboardComponent,
    NavbarComponent,
    VendorProfileComponent,
    OrdersComponent,
    AddProductComponent,
    ProductListComponent,
    AnalyticsComponent,
    VendorMatrialRequestComponent,
    CheckOutComponent,
    PaymentComponent,
    TrackOrderComponent,
    FaqsComponent,
    MaterialExpertComponent,
    ExpertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
