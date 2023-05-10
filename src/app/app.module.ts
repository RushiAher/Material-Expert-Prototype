import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { window } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { DashboardionComponent } from './components/user/dashboardion/dashboardion.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnalyticsComponent } from './components/user/analytics/analytics.component';
import { CheckOutComponent } from './components/user/check-out/check-out.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { TrackOrderComponent } from './components/user/track-order/track-order.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { MaterialExpertComponent } from './components/user/material-expert/material-expert.component';
import { ExpertProfileComponent } from './components/user/expert-profile/expert-profile.component';
import { AppointmentsComponent } from './components/user/appointments/appointments.component';
import { ExpertCardComponent } from './components/user/components/expert-card/expert-card.component';
import { ExpertDashboardComponent } from './components/expert/expert-dashboard/expert-dashboard.component';
import { MyProfileComponent } from './components/expert/my-profile/my-profile.component';
import { BilingAnalyticsComponent } from './components/user/biling-analytics/biling-analytics.component';
import { ProjectsComponent } from './components/expert/projects/projects.component';
import { AvailabilityComponent } from './components/expert/availability/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardLayoutComponent,
    DashboardionComponent,
    SettingsComponent,
    UserProfileComponent, 
    NavbarComponent,
    AnalyticsComponent,
    CheckOutComponent,
    ExpertCardComponent,
    PaymentComponent,
    TrackOrderComponent,
    FaqsComponent,
    MaterialExpertComponent,
    ExpertProfileComponent,
    AppointmentsComponent,
    ExpertDashboardComponent,
    MyProfileComponent,
    BilingAnalyticsComponent,
    ProjectsComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
