import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {

  showSchedule: boolean = true;
  showCalender: boolean = false;
 showSelectedOption(e: any) {
    let id = e.target.id;
    $('.tabs').removeClass('active');
    $('#' + id).addClass('active');
   if (id === 'schedule') {
     this.showSchedule = true; this.showCalender = false;
   } else if (id === 'calendar') {
     this.showCalender = true; this.showSchedule = false; 
   }
 }
  
  timeData =  ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM"]
  availabilityData = [
    {
      id: "1",
      day: "Monday",
     
    },
    {
      id: "2",
      day: "Tuesday",
    },
    {
      id: "3",
      day: "Wednesday",
    },
    {
      id: "4",
      day: "Thrusday",
    },
    {
      id: "5",
      day: "Friday",
    },
    {
      id: "6",
      day: "Saturday",
    },
    {
      id: "7",
      day: "Sunday",
    },
  ]
}
