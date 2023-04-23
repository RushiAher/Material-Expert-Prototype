import { Component } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {


  constructor(){
    window.scroll(0,0)
  }

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

}
