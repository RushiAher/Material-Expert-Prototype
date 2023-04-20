import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {


orderSummary=[
  {
    id: "1",
    name: "Aluminum",
    code: "AL260",
    minQTY: "10",
    qty: "50",
    requirement: ["length: 5mm", "width: 1m", "form: angle", "thickness: 3mm"],
    cost: "560"
  },
  {
    id: "2",
    name: "Copper",
    code: "CU5600",
    minQTY: "5",
    qty: "20",
    requirement: ["length: 10mm", "width: 2m", "form: sheet", "thickness: 1mm"],
    cost: "356"
  },
  {
    id: "3",
    name: "Steel",
    code: "6500ST",
    minQTY: "15",
    qty: "100",
    requirement: ["length: 7mm", "width: 1.5m", "form: rod", "thickness: 5mm"],
    cost: "790"
  },
  {
    id: "4",
    name: "Titanium",
    code: "5622TI",
    minQTY: "8",
    qty: "40",
    requirement: ["length: 12mm", "width: 1.8m", "form: plate", "thickness: 2mm"],
    cost: "1560"
  },
  {
    id: "5",
    name: "Brass",
    code: "BS4562",
    minQTY: "20",
    qty: "80",
    requirement: ["length: 15mm", "width: 1.2m", "form: bar", "thickness: 4mm"],
    cost: "980"
  },
  
]
vendorData=[
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
    verifiedState:true,
  },

]


}
