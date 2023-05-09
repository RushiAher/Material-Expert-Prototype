import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './auth/auth.guard';

import { FaqsComponent } from './components/faqs/faqs.component';

/** user imports */
import { DashboardionComponent } from './components/user/dashboardion/dashboardion.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { MaterialExpertComponent } from './components/user/material-expert/material-expert.component';
import { ExpertProfileComponent } from './components/user/expert-profile/expert-profile.component';
import { AppointmentsComponent } from './components/user/appointments/appointments.component';
import { BilingAnalyticsComponent } from './components/user/biling-analytics/biling-analytics.component';


/** expert imports */
import {ExpertDashboardComponent} from './components/expert/expert-dashboard/expert-dashboard.component'
import {MyProfileComponent} from './components/expert/my-profile/my-profile.component'
import {ProjectsComponent} from './components/expert/projects/projects.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardionComponent},
      {path:'profile', component:UserProfileComponent},
      {path:'settings', component:SettingsComponent},
      { path: 'material-experts', component: MaterialExpertComponent },
      { path: 'my-appointment', component: AppointmentsComponent },
      { path: 'billing', component: BilingAnalyticsComponent },
      {path:'expert-profile', component:ExpertProfileComponent},
       {path:'faqs', component: FaqsComponent},
      

      // ******* vendor ******
      // route url if there is a vendor use vendor at first like vendor/dashboard
      {path:'expert/dashboard', component: ExpertDashboardComponent},
      {path:'expert/profile', component: MyProfileComponent},
      { path: 'expert/faqs', component: FaqsComponent },
      {path:'expert/settings', component:SettingsComponent},
      {path:'expert/projects', component:ProjectsComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
