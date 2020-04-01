import { Component } from '@angular/core';

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  // TODO: A pop up page
  select() {
    window.alert('The service form will be on for next week!');
  }
}
