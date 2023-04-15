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
      name:'Helmet',
      date:'25 jan 2023',
      summary:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
  img:"../../../../assets/asserts/project assets/helmet.png"
    },
    {
      id:'2',
      name:'Condenser',
      date:'15 feb 2023',
      summary:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
       img:"../../../../assets/asserts/project assets/condenser.png"
    },
    
  ]


}
