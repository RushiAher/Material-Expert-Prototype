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
      name:'project 1',
      date:'25 jan 2023',
      summery:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
    },
    {
      id:'2',
      name:'project 2',
      date:'15 feb 2023',
      summery:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
    },
    {
      id:'3',
      name:'project 3',
      date:'14 march 2023',
      summery:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
    },
  ]


}
