import { Component } from '@angular/core';

declare let $: any

@Component({
  selector: 'app-matrial-selection',
  templateUrl: './matrial-selection.component.html',
  styleUrls: ['./matrial-selection.component.css']
})
export class MatrialSelectionComponent {

  showMatrialByProperty: boolean = true;
  showByProcess: boolean = false;
  showProductryAssistence: boolean = false;


  showForm(e:any){
    let id = e.target.id;
    $('.tab-lifted').removeClass('tab-active');
    $('#'+id).addClass('tab-active');
    if(id === 'properties'){
      this.showMatrialByProperty = true;this.showByProcess=false;this.showProductryAssistence=false
    }else if(id === 'assistence'){
      this.showMatrialByProperty = false;this.showByProcess=false;this.showProductryAssistence=true
    }else if(id === 'process'){this.showMatrialByProperty = false;this.showByProcess=true;this.showProductryAssistence=false}
  }


  MatrialCatagory = [
    'Metals',
    'Chemicals',
    'Polymers',
    'Ceramics',
    'Composites',
    'Natural Materials'
  ];

  parts=[
    'Condenser Tubes',
    'Fins',
    'Castings/Shells',
    'Bracket/Frame',
    'Gaskets/Seals',
    'Working Fluid'
  ];


  parameterForMatrialByProperty={

    PhysicalProperties:[
    { name: 'Density', units: 'kg/m^3' },
    { name: 'Porosity', units: '%' },
    { name: 'Permeability', units: 'mD' },
    { name: 'Thickness', units: 'mm' }],

    MechanicalProperties:[
      { name: 'Hardness, Brinell', units: 'kg/mm²' },
      { name: 'Hardness, Knoop', units: 'kg/mm²' },
      { name: 'Hardness, Rockwell A', units: 'kg/mm²' },
      { name: 'Hardness, Rockwell B', units: 'kg/mm²' },
      { name: 'Hardness, Rockwell C', units: 'kg/mm²' },
      { name: 'Hardness, Vickers', units: 'kg/mm²' },
      { name: 'Tensile Strength, Ultimate', units: 'MPa' },
      { name: 'Tensile Strength, Yield', units: 'MPa' },
      { name: 'Elongation at Break', units: '%' },
      { name: 'Elongation at Yield', units: '%' },
      { name: 'Reduction of Area', units: '%' },
      { name: 'Modulus of Elasticity', units: 'GPa' },
      { name: 'Flexural Yield Strength', units: 'MPa' },
      { name: 'Compressive Yield Strength', units: 'MPa' },
      { name: 'Notched Tensile Strength', units: 'MPa' },
      { name: 'Bulk Modulus', units: 'GPa' },
      { name: 'Poissons Ratio', units: '-' },
      { name: 'Fatigue Strength', units: 'MPa' },
      { name: 'Fracture Toughness', units: 'MPa√m' },
      { name: 'Machinability', units: '-' },
      { name: 'Shear Modulus', units: 'GPa' },
      { name: 'Shear Strength', units: 'MPa' },
      { name: 'Izod Impact', units: 'J/m' },
      { name: 'Izod Impact Unnotched', units: 'J/m' },
      { name: 'Charpy Impact', units: 'J/m²' },
      { name: 'Charpy Impact, Unnotched', units: 'J/m²' },
      { name: 'Charpy Impact, Notched', units: 'J/m²' },
      { name: 'Taber Abrasion', units: 'mg/1000 cycles' }
    ],
    ElectricalProperties:[
      {name: "Electrical Resistivity", unit: "ohm-meter"},
      {name: "Magnetic Permeability", unit: "H/m"},
      {name: "Magnetic Coercive Force, Hc", unit: "A/m"},
      {name: "Magnetic Saturation Flux Density, Bmax", unit: "T"},
      {name: "Magnetic Remanence, Br", unit: "T"},
      {name: "Curie Temperature", unit: "°C"}
    ],
    ThermalProperties:[
      {name: "CTE, linear", unit: "µm/m-°C"},
      {name: "Specific Heat Capacity", unit: "J/kg-°C"},
      {name: "Thermal Conductivity", unit: "W/m-°C"},
      {name: "Melting Point", unit: "°C"},
      {name: "Solidus", unit: "°C"},
      {name: "Liquidus", unit: "°C"},
      {name: "Maximum Service Temperature, Air", unit: "°C"},
      {name: "Minimum Service Temperature, Air", unit: "°C"}
    ],
    OpticalProperties:[
      {name: "Emissivity (0-1)", unit: "°C"}
    ],
    ProcessingProperties:[
      {name: "Processing Temperature",unit: "°C"},
      {name: "Annealing Temperature",unit: "°C"},
      {name: "Hot-Working Temperature",unit: "°C"}]

  }
  parameterForProductryAssistence={
    DefineServiceRequirements:['Environmental Conditions', 'Operating Conditions', 'Functionality of the Part', 'Aesthetic Requirements', 'Ergonomics'],
    ManufacturingRequirement:['Manufacturing Process', 'Special Treatment', 'Surface Finish'],
    MaterialPropertyRequirement:['Mechanical Properties', 'Physical Properties', 'Chemical Properties', 'Electrical Properties', 'Thermal Properties', 'Optical Properties']
  }







}
