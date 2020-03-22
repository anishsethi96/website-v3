import { Component } from '@angular/core';

import { services } from './services';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServiceListComponent {
  services = services;

  // TODO: A pop up page
  select() {
    window.alert('The service form will be on for next week!');
  }
}
