import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


productListData=[
  {
    name:'DUPLEX STEEL',
    specifications:' 304 stainless steel has a 0.2% proof strength in the region of 280 MPa (41 ksi), a 22%Cr duplex stainless steel',
    capacity:'1-100 kg',
    dataSheet:'TDS',
    company: 'TATA Steel',
    forms:"Flat Plate",
    status:'active',
  },
  {
    name:'COBALT ALLOYS',
    specifications:'1.1% carbon, 8.25% cobalt, 9.5% molybdenum 3.9% chromium, 1.2% vanadium and 1.6% tungsten.',
    capacity:'10-100kg',
    dataSheet:'TDS',
    company: 'Vedanta',
     forms:"Round bar",
    status:'active',
  },
  {
    name:'INCONEL',
    specifications:'INCONEL® nickel-chromium alloy 625 (UNS N06625/W.Nr. 2.4856)',
    capacity:'5mm-1000mm Dia',
    dataSheet:'TDS',
    company: 'JSW Steel',
     forms:"Pipe",
    status:'active',
  },
  {
    name:'INCOLOY',
    specifications:'Incoloy Alloy 800 is an Iron nickel chromium alloy with a low carbon content,',
    capacity:'0.5-50kg',
    dataSheet:'TDS',
    company: 'Steel Authority of India Limited (SAIL)',
     forms:"Rectangle ",
    status:'inactive',
  },
  {
    name:'MONEL',
    specifications:'nickel (65-70%) and copper (20-29%) and also contains iron and manganese (5%) and other compounds',
    capacity:'10-500 kg',
    dataSheet:'TDS',
    company: 'Jindal Steel and Power',
     forms:"Square Plate",
    status:'active',
  },
  {
    name:'TITANIUM',
    specifications:'ultimate tensile strength of about 434 MPa (63,000 psi), equal to that of common, low-grade steel alloys',
    capacity:'25-2000kg',
    dataSheet:'TDS',
    company: 'TATA Steel BSL',
     forms:"Angle",
    status:'active',
  }
]

}
