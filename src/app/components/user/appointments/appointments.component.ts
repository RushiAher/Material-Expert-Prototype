import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  showUpcomingAppointments: boolean = true;
  showAppointmentHistory: boolean = false;


  showSchedule(id:any)
  {
    if ($('#accordion-collapse-body-'+id).hasClass('hidden')) {
      $('#accordion-collapse-body-'+id).removeClass('hidden')
    } else if (!$('#accordion-collapse-body-'+id).hasClass('hidden')) {
      $('#accordion-collapse-body-'+id).addClass('hidden')
    }
    
  }

   showSelectedOption(e: any) {
    let id = e.target.id;
    $('.tabs').removeClass('active');
    $('#' + id).addClass('active');
     if (id === 'upcoming_appointments') {
       this.showUpcomingAppointments = true; this.showAppointmentHistory = false; 
     } else if (id === 'appointment_history') {
       this.showAppointmentHistory = true; this.showUpcomingAppointments = false;
     }
   }
  
   expertsAvailabilityDate = [
    {
      id: 1,
      day: "Sun",
      date:"17 April"
    },
    {
      id: 2,
      day: "Mon",
      date:"18 April"
    },
    {
      id: 3,
      day: "Tue",
      date:"19 April"
    },
    {
      id: 4,
      day: "Wed",
      date:"20 April"
    },
    {
      id: 5,
      day: "Thu",
      date:"21 April"
    },
    {
      id: 5,
      day: "Thu",
      date:"21 April"
    },
    {
      id: 5,
      day: "Thu",
      date:"21 April"
    },
  ]
  expertsAvailabilityTime = [
    {
      id: 1,
      time:"10:30AM"
    },
    {
      id: 2,
      time:"11:30 AM"
    },
    {
      id: 3,
      time:"12:30 PM"
    },
    {
      id: 4,
      time:"1:30 PM"
    },
    {
      id: 5,
      time:"2:30 PM"
    },
    {
      id: 6,
      time:"3:30 PM"
    },
    {
      id: 7,
      time:"4:30 PM"
    },
    {
      id: 8,
      time:"5:30 PM"
    },
    {
      id: 9,
      time:"6:30 PM"
    },
    {
      id: 10,
      time:"7:30 PM"
    },
    {
      id: 11,
      time:"8:30 PM"
    },
   
  ]

  upcomingAppointmentData = [
    {
      id: "1",
      name: "Josh Philip",
      img: "../../../../assets/asserts/experts/person1.jpg",
      profileUrl:"",
      summary: "Lorem ipsum dolor sit amet, consectetur.",
      meetingType: "1:1 Mentorship",
      fees: "200",
      duration: "60 mins",
      aboutMeeting: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro maxime soluta consequuntur corrupti voluptates repellendus, deleniti quasi culpa neque sit? Consequuntur eius asperiores consequatur?",
      meetingDate: "Fri 12 May",
      meetingTime:"12:30 PM"
    },
    {
      id: "2",
      name: "Josh Philip",
      img: "../../../../assets/asserts/experts/person1.jpg",
      profileUrl:"",
      summary: "Lorem ipsum dolor sit amet, consectetur.",
      meetingType: "1:1 Consulting",
      fees: "400",
      duration: "60 mins",
      aboutMeeting: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro maxime soluta consequuntur corrupti voluptates repellendus, deleniti quasi culpa neque sit? Consequuntur eius asperiores consequatur?",
      meetingDate: "Sun 16 May",
      meetingTime:"4:30 PM"
    }
  ]
}
