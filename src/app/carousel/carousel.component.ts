import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpia-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public readonly slides = [
    {
      image: 'assets/grey_bg.jpg',
      title: 'RPI Ambulance',
      desc: `RPI Ambulance is a student run and operated Basic Life Support (BLS) transporting ambulance agency that
        serves the RPI campus and surrounding communities. We respond to approximately 150 to 200 calls and provide
        first aid coverage to about 25 special events every academic year.`,
      readMoreLink: '/rpia-about'
    },
    {
      image: 'assets/grey_bg.jpg',
      title: '5939',
      desc: `RPI Ambulance operates a 2006 AEV Trauma Hawk XL Type II ambulance mounted on a Ford E-350 chassis. This
        vehicle was placed in service in the Spring of 2007. The county vehicle identifier is 5939, however the
        ambulance was formerly known as A-39 a.`,
      readMoreLink: '/5939-about'
    },
    {
      image: 'assets/grey_bg.jpg',
      title: 'FR-59',
      desc: `First Response 59 is RPI Ambulance's first response vehicle. It is a 2007 Ford Explorer that was first
        placed in service with the agency in October of 2014. FR-59 is equipped to NYS Part 800.26 with a full
        complement of disposable medical supplies, splints, epinephrine, a glucometer and a foldable backboard.`,
      readMoreLink: '/fr59-about'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  getBgImageStyle(slide): {'background-image': string} {
    return { 'background-image': `url(${slide.image})` };
  }
}
