import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-biling-analytics',
  templateUrl: './biling-analytics.component.html',
  styleUrls: ['./biling-analytics.component.css']
})
export class BilingAnalyticsComponent {
  showProjectBilling: any = true;
  showTransactionHistory: any = false;

showSelectedOption(e: any) {
    let id = e.target.id;
    $('.tabs').removeClass('active');
    $('#' + id).addClass('active');
     if (id === 'project_billing') {
       this.showProjectBilling = true; this.showTransactionHistory = false; 
     } else if (id === 'transaction_history') {
       this.showTransactionHistory = true; this.showProjectBilling = false;
     }
}
  
  projectBillingData = [
    {
      id: "1",
      projectName: "UV Exposure Helmet",
      expertName: "Josh Philip",
      url:"",
      amount:"1200"
    },
    {
      id: "2",
      projectName: "Indirect HT Al Fin Condenser",
      expertName: "Josh Philip",
      url:"",
      amount:"3000"
    },
  ]
  transctionHistoryData = [
    {
      id: "",
      tDate: "12/04/2023",
      tInitiator: "Amit Jadhwar",
      tDetails: "transaction id:1233434321",
      tAmount:"4200"
    }
  ]

}
