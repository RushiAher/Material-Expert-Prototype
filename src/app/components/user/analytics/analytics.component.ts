import { Component,OnInit  } from '@angular/core';
declare let ApexCharts: any;
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
 chartOptions: any;
  chartData: any;
  
  constructor(){
    window.scroll(0,0)
  }

  ngOnInit() {
    this.chartOptions = {
      series: [1200, 1500, 2400, 2100, 1000, 2000, 1300],
      labels: ['Shell', 'Liners', 'Padding', 'Visor', 'Buckle','Fastener','Adjuster'],
      chart: {
        width: 380,
        type: 'pie',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    this.chartData = [1200, 1500, 2400, 2100, 1000, 2000, 1300];
    
  var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);

  chart.render();
  }

  

  componentData = [
    {
      id: 1,
      name:"Shell"
  },
    {
      id: 2,
      name:"Liners"
  },
    {
      id: 3,
      name:"Padding"
  },
    {
      id: 4,
      name:"Visor"
  },
    {
      id: 5,
      name:"Buckle"
    },
    {
      id: 6,
      name:"Fastener"
  },{
      id: 7,
      name:"Adjuster"
  },
]

}
