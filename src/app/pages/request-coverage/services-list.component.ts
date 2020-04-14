import { Component } from '@angular/core';

import { services } from './services';

@Component({
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServiceListComponent {
  services = services;

  model = new services();

  service_tier = 0;

  selectT1() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
    this.service_tier = 1;
  }

  selectT2() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
    this.service_tier = 2;
  }

  selectT3() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
    this.service_tier = 3;
  }

  close() {
    var modal = document.getElementById("popup");
    modal.style.display = "none";
  }

  handleSubmit() {
    const form = document.querySelector('form');
    const data = new FormData(form);
    // Need the backend information here
  }

  clearForm() {
    this.model = new services();
  }
}

