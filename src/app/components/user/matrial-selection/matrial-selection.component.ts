import { Component } from '@angular/core';

declare let $ :any

@Component({
  selector: 'app-matrial-selection',
  templateUrl: './matrial-selection.component.html',
  styleUrls: ['./matrial-selection.component.css']
})
export class MatrialSelectionComponent {

  showProperties: boolean = true;
  showProcess: boolean = false;
  showAssistance: boolean = false;
ngOnInit(): void {
}
navigateTabs(e: any) {
let id =  e.target.id
$('.tab-option').removeClass('active')
$('#'+id).addClass('active')
  if (id == 'properties') {
    this.showProperties = true;
    this.showProcess = false;
    this.showAssistance = false;

  } else if (id == 'process') {
    this.showProperties = false;
    this.showProcess = true;
    this.showAssistance = false;

  } else if (id == 'productry') {
    this.showProperties = false;
    this.showProcess = false;
    this.showAssistance = true;

  }
}

  PhysicalProperties= [
    {
      id:"1",
      name: "Molecular-weight",
      unit:"Mio. g/mol"
    },
    {
      id:"2",
      name: "Density",
      unit:"g/cm³"
    },
    {
      id:"3",
      name: "Notched impact strength",
      unit:"kJ/m²"
    },
    {
      id:"4",
      name: "Abrasion-Index (Sand-Slurry)",
      unit:""
    },
    {
      id:"5",
      name: "Elongation (Break / 1B - 50mm/Min.)",
      unit:"%"
    },
    {
      id:"6",
      name: "Tensile strength at yield (1B - 50mm/Min.)",
      unit:"N/mm²"
    },
    {
      id:"7",
      name: "Tensile-E-modulus (1B - 1mm/Min.)",
      unit:"N/mm²"
    }

  ]
  thermalProperties= [
    {
      id:"1",
      name: " Melting Point (DSC)",
      unit:"°C"
    },
    {
      id:"2",
      name: "Thermal Conductivity",
      unit:"W/m*K"
    },
    {
      id:"3",
      name: "Max. operation temperature",
      unit:"°C"
    },
    {
      id:"4",
      name: "Coefficient of thermal expansion (23 - 80°C)",
      unit:"mm/mm °C"
    },


  ]
  electricalProperties= [
    {
      id:"1",
      name: "Volume resistivity",
      unit:"Ohm*cm"
    },
    {
      id:"2",
      name: "Surface resistivity",
      unit:"Ohm"
    },

  ]


}
