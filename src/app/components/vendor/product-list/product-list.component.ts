import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


productListData=[
  {
    name:'Aluminium',
    specifications:'260*550*25mm Sheet',
    capacity:'50-1000mm W',
    dataSheet:'TDS',
    company:'Shreenath Metals',
    status:'active',
  },
  {
    name:'Nylon',
    specifications:'Nylon 6 / 20 kg',
    capacity:'10-100kg',
    dataSheet:'TDS',
    company:'Swami samarth Enterprises',
    status:'active',
  },
  {
    name:'LLDPE',
    specifications:'500kg /Virgin White',
    capacity:'25-2000kg',
    dataSheet:'TDS',
    company:'Multiplast Pvt Ltd',
    status:'active',
  },
  {
    name:'Sodium Sulphate',
    specifications:'CAS NO:- 7757-82-6 / 24kg',
    capacity:'0.5-50kg',
    dataSheet:'TDS',
    company:'Petrochem IND LTD',
    status:'inactive',
  },
  {
    name:'Stainless Steel',
    specifications:'25mm Dia*260mm length',
    capacity:'5mm-1000mm Dia',
    dataSheet:'TDS',
    company:'Adinath metals',
    status:'inactive',
  }
]

}
