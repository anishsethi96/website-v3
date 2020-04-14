import { Component } from '@angular/core';

import { services } from './services';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServiceListComponent {
  constructor (private http:HttpClient) {}
  services = services;

  model = new services();

  selectT1() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  selectT2() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  selectT3() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  close() {
    var modal = document.getElementById("popup");
    modal.style.display = "none";
  }

  onSubmit(data) {
    this.http.post("http://localhost:3000/rampart/request_coverage/insert", data)
    .subscribe((result)=>{
        console.warn("result", result)
    })
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

