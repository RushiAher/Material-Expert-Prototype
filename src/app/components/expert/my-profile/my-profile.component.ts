import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  ngOnInit(): void {
    $(document).ready(function () {
      $(".form-control").select2({
        tags: true,
        tokenSeparators: [',', ' ']
      })
    })
  }

}
