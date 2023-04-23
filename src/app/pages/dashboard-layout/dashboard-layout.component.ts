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
    this.userType 
  }

  ngOnInit():void {
    this.userType = localStorage.getItem('userType')
    if (this.userType === 'user'){
      this.menuData = this.userMenuData
    }else if (this.userType === 'vendor'){
      this.menuData = this.vendorMenuData
    }else{
      this.router.navigateByUrl('/login')
    }



  }

    userMenuData = [
      {
        id: '1',
        icon: 'bi bi-house-door-fill',
        name: 'home',
        url: '/',
        hasSubmenu: 'false',
      },
      {
        id: '2',
        icon: 'fa-solid fa-flask-vial',
        name: 'material selection',
        url: '#',
        hasSubmenu: 'true',
        submenuItems: [
          {
            name: 'metals',
            url: 'materials-selection',
          },
          {
            name: 'chemicals',
            url: '#',
          },
          {
            name: 'polymers',
            url: '#',
          },
          {
            name: 'composites',
            url: '#',
          },
          {
            name: 'ceramics',
            url: '#',
          },
          {
            name: 'natural material',
            url: '#',
          },
        ]
      },
      {
        id: '3',
        icon: 'bi bi-bag-fill',
        name: 'material procurement',
        url: 'materials-procurement',
        hasSubmenu: 'false',
        submenuItems: [
          {
            name: 'metals',
            url: '#',
          },
          {
            name: 'chemicals',
            url: '#',
          },
          {
            name: 'polymers',
            url: '#',
          },
          {
            name: 'composites',
            url: '#',
          },
          {
            name: 'ceramics',
            url: '#',
          },
          {
            name: 'natural material',
            url: '#',
          },
        ]
      },

      {
        id: '4',
        icon: 'bi bi-chat-left-dots-fill',
        name: 'Community chat',
        url: '',
        externalUrl:'http://surl.li/gkskn',
        hasSubmenu: 'false',
        submenuItems: [
          {
            name: 'metals',
            url: '#',
          },
          {
            name: 'chemicals',
            url: '#',
          },
          {
            name: 'polymers',
            url: '#',
          },
          {
            name: 'composites',
            url: '#',
          },
          {
            name: 'ceramics',
            url: '#',
          },
          {
            name: 'natural material',
            url: '#',
          },
        ]
    },

    //   {
    //     id: '5',
    //     icon: 'bi bi-bug-fill',
    //     name: 'Material Testing',
    //     url: '#',
    //     hasSubmenu: 'true',
    //     submenuItems: [
    //       {
    //         name: 'metals',
    //         url: '#',
    //       },
    //       {
    //         name: 'chemicals',
    //         url: '#',
    //       },
    //       {
    //         name: 'polymers',
    //         url: '#',
    //       },
    //       {
    //         name: 'composites',
    //         url: '#',
    //       },
    //       {
    //         name: 'ceramics',
    //         url: '#',
    //       },
    //       {
    //         name: 'natural mmatrial',
    //         url: '#',
    //       },
    //     ]
    // },

      // {
      //   id: '6',
      //   icon: 'bi bi-buildings-fill',
      //   name: 'Consultancy',
      //   url: '#',
      //   hasSubmenu: 'true',
      //   submenuItems: [
      //     {
      //       name: 'metals',
      //       url: '#',
      //     },
      //     {
      //       name: 'chemicals',
      //       url: '#',
      //     },
      //     {
      //       name: 'polymers',
      //       url: '#',
      //     },
      //     {
      //       name: 'composites',
      //       url: '#',
      //     },
      //     {
      //       name: 'ceramics',
      //       url: '#',
      //     },
      //     {
      //       name: 'natural mmatrial',
      //       url: '#',
      //     },
      //   ]
      // },
      // {
      //   id: '7',
      //   icon: 'bi bi-patch-check-fill',
      //   name: 'certification',
      //   url: '#',
      //   hasSubmenu: 'false',
      // },
   {
      id:'5',
      icon:'fa-solid fa-chart-pie',
      name:'project analytics',
      url:'project-analytics',
      hasSubmenu: 'false',

      },

    {
      id:'6',
      icon:'bi bi-gear-fill',
      name:'Settings',
      url:'settings',
      hasSubmenu:'false',
      },
      {
        id: '7',
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
      url: 'vendor/dashboard',
      hasSubmenu: 'false',
    },
    {
      id: '2',
      icon: 'fa-solid fa-boxes-stacked',
      name: 'Your Shop',
      url: 'vendor/your-shop',
      hasSubmenu: 'false',
      submenuItems: [
        {
          name: 'metals',
          url: '#',
        },
        {
          name: 'chemicals',
          url: '#',
        },
        {
          name: 'polymers',
          url: '#',
        },
        {
          name: 'composites',
          url: '#',
        },
        {
          name: 'ceramics',
          url: '#',
        },
        {
          name: 'natural mmatrial',
          url: '#',
        },
      ]
    },
    {
      id: '3',
      icon: 'fa-solid fa-cart-flatbed',
      name: 'Orders',
      url: 'vendor/orders',
      hasSubmenu: 'false',
    },
    {
      id: '4',
      icon: 'fa-solid fa-building',
      name: 'Bussiness Profile',
      url: 'vendor/business-profile',
      hasSubmenu: 'false',
    },
    {
      id: '5',
      icon: 'fa-solid fa-gears',
      name: 'Settings',
      url: 'vendor/settings',
      hasSubmenu: 'false',
    },
    // {
    //   id: '6',
    //   icon: 'fa-solid fa-magnifying-glass-chart',
    //   name: 'Analytics',
    //   url: '#',
    //   hasSubmenu: 'false',
    // },
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
          url: 'vendor/faqs',
        }]
    }
  ]


  showsubmen(id:any){
    $('.submenu').slideUp();
    $('#submenu-'+id).slideToggle();
  }

  closeAllMenu(){
    $('.submenu').slideUp();
  }



}
