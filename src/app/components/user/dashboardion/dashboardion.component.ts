import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardion',
  templateUrl: './dashboardion.component.html',
  styleUrls: ['./dashboardion.component.css']
})
export class DashboardionComponent {


  projectData=[
    {
      id:'1',
      name:'UV Exposure Helmet',
      date:'10 feb 2023',
      projectSector:'Automotive',
      ProjectOrganizationType:'Manufacturing Industry',
      ProjectPhase:'Speciality Product',
      projectAreaPincode:'412207',
      summary:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum `,
       img:"../../../../assets/asserts/project assets/helmet.png",
       Parts:['Shell','liners','padding','visor','buckle','fastener','adjuster'],
    },
    {
      id:'2',
      name:'Indirect HT Al Fin Condenser',
      date:'10 feb 2023',
      projectSector:'Automotive',
      ProjectOrganizationType:'Product Development Lab',
      ProjectPhase:'Minimum Viable Product',
      projectAreaPincode:'412207',
      summary:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum `,
       img:"../../../../assets/asserts/project assets/condenser.png",
       Parts:['Condenser Tubes','Fins','Castings/Shells','Bracket/Frame','Gaskets/Seals','Working Fluid'],
    },

  ]


}
