import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-matrial-request',
  templateUrl: './vendor-matrial-request.component.html',
  styleUrls: ['./vendor-matrial-request.component.css']
})
export class VendorMatrialRequestComponent {

  constructor(){
    window.scroll(0,0)
  }


vendorData=[
  {
    id: "1",
    vendorProfile: "https://www.sarex.com/sarexhome/img/TC.jpg",
    vendorName: "ABC Corporation",
    cost: "1000",
    deliveryDay: "5",
    mtdsStatus: "yes",
    quality: "tur , iso",
    rating: "4.5",
    verifiedState:true,
  },
  {
    id: "2",
    vendorProfile: null,
    vendorName: "XYZ Suppliers",
    cost: "850",
    deliveryDay: "3",
    mtdsStatus: "no",
    quality: "iso",
    rating: "3.0",
    verifiedState:false,
  },
 
  {
    id: "8",
    vendorProfile: "https://cdn.corporatefinanceinstitute.com/assets/Industry.jpeg  ",
    vendorName: "MNO Industries",
    cost: "1000",
    deliveryDay: "4",
    mtdsStatus: "yes",
    quality: "tur , iso",
    rating: "4.9",
    verifiedState:true,
  }
  
  
  
  
  

  
]

}
