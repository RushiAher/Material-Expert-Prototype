import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardionComponent } from './components/user/dashboardion/dashboardion.component';
import { VendorDashboardComponent } from './components/vendor/vendor-dashboard/vendor-dashboard.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { MatrialSelectionComponent } from './components/user/matrial-selection/matrial-selection.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardLayoutComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardionComponent},
      {path:'profile', component:UserProfileComponent},
      {path:'settings', component:SettingsComponent},
      {path:'materials-selection', component:MatrialSelectionComponent},

      // ******* vendor ******
      // route url if there is a vendor use vendor at first like vendor/dashboard
      {path:'vendor/dashboard', component: VendorDashboardComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
