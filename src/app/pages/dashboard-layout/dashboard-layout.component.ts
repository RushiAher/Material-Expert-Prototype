import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {


  menuData:any = []

  userType:any 

  constructor(private router:Router) {
    this.userType = localStorage.getItem('userType')
    if (this.userType === 'user'){
      this.menuData = this.userMenuData
    }else if (this.userType === 'expert'){
      this.menuData = this.vendorMenuData
    }else{
      this.router.navigateByUrl('/login')
    }
    window.scroll(0,0)
  }

  ngOnInit():void {
    this.userType = localStorage.getItem('userType')
    if (this.userType === 'user'){
      this.menuData = this.userMenuData
    }else if (this.userType === 'expert'){
      this.menuData = this.vendorMenuData
    }else{
      this.router.navigateByUrl('/login')
    }



  }

  showLogoName(){
    $('#logoName').addClass('opacity-1').removeClass(' opacity-0')
  }

    userMenuData = [
      {
        id: '1',
        
        icon: 'bi bi-house-door-fill',
        name: 'Dashboard',
        url: '/',
        hasSubmenu: 'false',
      },
      {
        id: '2',
        icon: 'bi bi-file-earmark-person-fill',
        name: 'Browse Experts',
        url: 'material-experts',
        hasSubmenu: 'false',
      },
      {
        id: '3',
        icon: 'bi bi-bag-fill',
        name: 'My Appointments',
        url: 'my-appointment',
        hasSubmenu: 'false',
        
      },

      {
        id: '4',
        icon: 'bi bi-receipt-cutoff',
        name: 'Billing & Analytics',
        url: 'billing',
        hasSubmenu: 'false',
        
    },
    {
      id:'5',
      icon:'bi bi-gear-fill',
      name:'Account Settings',
      url:'settings',
      hasSubmenu:'false',
      },
      {
        id: '6',
        icon: 'bi bi-question-circle-fill',
        name: 'Help & support',
        url: '#',
        hasSubmenu: 'true',
        submenuItems: [
          {
            name: 'Help center',
            url: '#',
          },
          {
            name: 'FAQs',
            url: 'faqs',
          }]
      }
  ]


  vendorMenuData=[
    {
      id: '1',
      icon: 'bi bi-house-door-fill',
      name: 'Dashboard',
      url: 'expert/dashboard',
      hasSubmenu: 'false',
    },
    {
      id: '2',
      icon: 'fa-solid fa-boxes-stacked',
      name: 'Profile',
      url: 'expert/profile',
      hasSubmenu: 'false',
      
    },
    {
      id: '3',
      icon: 'fa-solid fa-cart-flatbed',
      name: 'My Projects',
      url: '#',
      hasSubmenu: 'false',
    },
    {
      id: '4',
      icon: 'fa-solid fa-building',
      name: 'Scheduled Calls',
      url: 'vendor/business-profile',
      hasSubmenu: 'false',
    },
    {
      id: '5',
      icon: 'fa-solid fa-building',
      name: 'Billing',
      url: 'vendor/business-profile',
      hasSubmenu: 'false',
    },
    {
      id: '6',
      icon: 'fa-solid fa-gears',
      name: 'Account Settings',
      url: 'expert/settings',
      hasSubmenu: 'false',
    }
   
  ]


  showsubmen(id:any){
    $('.submenu').slideUp();
    $('#submenu-'+id).slideToggle();
  }

  closeAllMenu(){
    $('#logoName').removeClass('opacity-1').addClass(' opacity-0')
    $('.submenu').slideUp();
  }



}
