import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
ngOnInit(): void {
    $(".js-example-tokenizer").select2({
    tags: true,
    tokenSeparators: [',', ' ']
})
  }

}
