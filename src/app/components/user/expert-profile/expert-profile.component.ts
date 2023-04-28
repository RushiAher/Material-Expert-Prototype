import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.css']
})
export class ExpertProfileComponent {


  expertServices = [
    {
      id: 1,
      name:"30 Minutes product consulting"
    }
  ]
}
