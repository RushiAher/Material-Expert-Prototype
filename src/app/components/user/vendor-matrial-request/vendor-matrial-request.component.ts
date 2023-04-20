import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-matrial-request',
  templateUrl: './vendor-matrial-request.component.html',
  styleUrls: ['./vendor-matrial-request.component.css']
})
export class VendorMatrialRequestComponent {


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
    mtdsStatus: "yes",
    quality: "iso",
    rating: "3.0",
    verifiedState:true,
  },
  {
    id: "3",
    vendorProfile: "https://2.imimg.com/data2/XN/LD/MY-2397432/industrial-raw-materials-500x500.jpg",
    vendorName: "PQR Industries",
    cost: "1200",
    deliveryDay: "7",
    mtdsStatus: "no",
    quality: "tur",
    rating: "4.8",
    verifiedState:false,
  },
  {
    id: "4",
    vendorProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfwsvjCY6AJfz0QMt66ywRPnPjq_hgCtxeA&usqp=CAU",
    vendorName: "LMN Traders",
    cost: "950",
    deliveryDay: "4",
    mtdsStatus: "yes",
    quality: "tur",
    rating: "4.2",
    verifiedState:true,
  },
  {
    id: "5",
    vendorProfile: null,
    vendorName: "DEF Enterprises",
    cost: "1100",
    deliveryDay: "6",
    mtdsStatus: "yes",
    quality: "tur , iso",
    rating: "3.5",
    verifiedState:true,
  },
  {
    id: "6",
    vendorProfile: null,
    vendorName: "GHI Suppliers",
    cost: "900",
    deliveryDay: "3",
    mtdsStatus: "no",
    quality: "iso",
    rating: "4.0",
    verifiedState:false,
  },
  {
    id: "7",
    vendorProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKMnZrCI6x9KY0wJSZmQK5kS_R_bm3fv5pQ&usqp=CAU",
    vendorName: "JKL Corporation",
    cost: "1050",
    deliveryDay: "5",
    mtdsStatus: "no",
    quality: "iso",
    rating: "3.2",
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
