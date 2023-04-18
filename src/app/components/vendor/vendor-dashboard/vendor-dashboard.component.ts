import { Component, AfterViewInit, ViewChild } from '@angular/core';
declare let ApexCharts: any
@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent {
  @ViewChild('myCanvas') myCanvas: any;

  ngAfterViewInit(): void {

    var revenuGraph = {
      series: [{
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100, 110, 95, 90, 70, 85]
      }, {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41, 52, 66, 40, 42, 53]
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      yaxis: {
        labels: {
          show: false
        }
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        labels: {
          show: false
        },
        categories: ["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"]
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
      },
      toolbar: {
        show: false
      },
      tooltip: {
        x: {
          format: 'month'
        },
      },

    };
    var chart = new ApexCharts(document.querySelector("#revennuGraph"), revenuGraph);
    chart.render();
    //chart1

    var revenualBarchart = {
      series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + "%";
          }
        }

      },
    };

    var chart = new ApexCharts(document.querySelector("#revenual-barchart"), revenualBarchart);
    chart.render();
    // chart 2
    var sales = {
      series: [85, 55, 95, 30, 15],
      chart: {
        type: 'donut',
      },

      labels: ['lethium', 'Copper', 'Aluminium', 'Carbon', 'Iron'],
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
    var chart = new ApexCharts(document.querySelector("#Total-sales"), sales);
    chart.render();
    // chart3

    var options = {
      series: [{
        name: 'Total Sales',
        data: [{
          x: 1996,
          y: 322
        },
        {
          x: 1997,
          y: 324
        },
        {
          x: 1998,
          y: 329
        },
        {
          x: 1999,
          y: 342
        },
        {
          x: 2000,
          y: 348
        },
        {
          x: 2001,
          y: 334
        },
        {
          x: 2002,
          y: 325
        },
        {
          x: 2003,
          y: 316
        },
        {
          x: 2004,
          y: 318
        },
        {
          x: 2005,
          y: 330
        },
        {
          x: 2006,
          y: 355
        },
        {
          x: 2007,
          y: 366
        },
        {
          x: 2008,
          y: 337
        },
        {
          x: 2009,
          y: 352
        },
        {
          x: 2010,
          y: 377
        },
        {
          x: 2011,
          y: 383
        },
        {
          x: 2012,
          y: 344
        },
        {
          x: 2013,
          y: 366
        },
        {
          x: 2014,
          y: 389
        },
        {
          x: 2015,
          y: 334
        }
        ]
      },],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 0.5
      },
      tooltip: {
        x: {
          format: "mm",
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      toolbar: {
        show: false
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30,
            show: false
          }
        },
        padding: {
          left: 20
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#sales"), options);
    chart.render();
    // chart 4

    var popularproducts = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: false
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Lithium', 'Boron', 'Carbon', 'Hydrogen', 'Iron', 'Aluminium', 'Sodium',
          'Berelium', 'boron', 'Nitrogen'
        ],
      }
    };

    var chart = new ApexCharts(document.querySelector("#top-product"), popularproducts);
    chart.render();

  }


  tableData = [
    {
      name: 'lithium',
      minQTY: '50g',
      price: '350',
      totalQtySale: '5.6 kg',
      totalRevenu: '2.5 Lakh',
      Growth: 32
    },
        {
      name: 'carbon',
      minQTY: '50g',
      price: '650',
      totalQtySale: '2.25 kg',
      totalRevenu: '26 K',
      Growth: 12
    },
        {
      name: 'aluminium',
      minQTY: '1 kg',
      price: '505',
      totalQtySale: '860 kg',
      totalRevenu: '12.5 Lakh',
      Growth: 120
    },
        {
      name: 'cappor',
      minQTY: '250g',
      price: '650',
      totalQtySale: '120 kg',
      totalRevenu: '52 K',
      Growth: 25
    },
        {
      name: 'boron',
      minQTY: '1g',
      price: '2650',
      totalQtySale: '150 g',
      totalRevenu: '5 Lakh',
      Growth: 35
    },
        {
      name: 'iron',
      minQTY: '1kg',
      price: '650',
      totalQtySale: '600 kg',
      totalRevenu: '65 K',
      Growth: 15
    },
  ]



}
