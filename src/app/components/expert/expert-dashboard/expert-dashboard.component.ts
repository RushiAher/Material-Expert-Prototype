import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-dashboard',
  templateUrl: './expert-dashboard.component.html',
  styleUrls: ['./expert-dashboard.component.css']
})
export class ExpertDashboardComponent {


  projectData=[
    {
      id: '1',
      name: 'UV Exposure Helmet',
      projectAddDate: '10 feb 2023',
      summary: `A helmet is a form of protective gear worn to protect the head. More specifically, complements to protect your eyes from harmful UV rays.	 `,
      img: "../../../../assets/asserts/project assets/helmet.png",
    },
      
    {
      id:'2',
      name:'Indirect HT Al Fin Condenser',
      projectAddDate:'10 feb 2023',  
      summary:`An indirect heat transfer aluminum fin condenser is a type of heat exchanger that uses aluminum fins to transfer heat from a 
        hot fluid to a cooler fluid without direct contact between the two fluids. `,
       img:"../../../../assets/asserts/project assets/condenser.png",
    },

  ]
}
