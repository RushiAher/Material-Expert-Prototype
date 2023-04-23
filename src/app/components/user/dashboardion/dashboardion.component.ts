import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardion',
  templateUrl: './dashboardion.component.html',
  styleUrls: ['./dashboardion.component.css']
})
export class DashboardionComponent {


  constructor(){
    window.scroll(0,0)
  }

  projectData=[
    {
      id:'1',
      name:'UV Exposure Helmet',
      projectStartDate:'10 feb 2023',
      projectSector:'Automotive',
      ProjectOrganizationType:'Manufacturing Industry',
      ProjectPhase:'Speciality Product',
      summary:`A helmet is a form of protective gear worn to protect the head. More specifically, complements to protect your eyes from harmful UV rays.	 `,
       img:"../../../../assets/asserts/project assets/helmet.png",
       Parts:['Shell','liners','padding','visor','buckle','fastener','adjuster'],
    },
    {
      id:'2',
      name:'Indirect HT Al Fin Condenser',
      projectStartDate:'10 feb 2023',
      projectSector:'Automotive',
      ProjectOrganizationType:'Product Development Lab',
      ProjectPhase:'Minimum Viable Product',
      summary:`An indirect heat transfer aluminum fin condenser is a type of heat exchanger that uses aluminum fins to transfer heat from a 
hot fluid to a cooler fluid without direct contact between the two fluids. `,
       img:"../../../../assets/asserts/project assets/condenser.png",
       Parts:['Condenser Tubes','Fins','Castings/Shells','Bracket/Frame','Gaskets/Seals','Working Fluid'],
    },

  ]


}
