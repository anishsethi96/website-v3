import { Component } from '@angular/core';

import { services } from './services';

@Component({
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServiceListComponent {
  services = services;

  // TODO: A pop up page
  selectT1() {
    window.alert('The service form will be on for next week!');
  }
  selectT2() {
    window.alert('The service form will be on for next week!');
  }
  selectT3() {
    window.alert('The service form will be on for next week!');
  }
}
