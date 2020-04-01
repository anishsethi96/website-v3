import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rpia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public readonly navbar = [
    {
      page: '/',
      title: 'Home',
      isDropdown: false,
    }, {
      page: null,
      title: 'About Us',
      isDropdown: true,
      dropdownOptions: [
        { page: '/rpia-about', title: 'About RPI Ambulance' },
        { page: '/faq', title: 'FAQs' },
        { page: '/officers', title: 'Officers' },
        { isDivider: true },
        { page: '/5939-about', title: 'Ambulance' },
        { page: '/fr59-about', title: 'First Response' },
        { isDivider: true },
        { page: '/media', title: 'Media' }
      ]
    }, {
      page: '/request-coverage',
      title: 'Request Coverage',
      isDropdown: false
    }, {
      isImage: true,
      customClass: 'logo'
    }, {
      page: null,
      title: 'Outreach',
      isDropdown: true,
      dropdownOptions: [
        { page: '/new-members-training', title: 'New Members' },
        { page: '/cpr-certification', title: 'CPR Certification' },
        { page: '/community', title: 'Community Outreach' }
      ]
    }, {
      page: '/contact-us',
      title: 'Contact Us',
      isDropdown: false
    }, {
      page: '/login',
      title: 'Login',
      isDropdown: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  isActive(nav): boolean {
    if (nav.isDropdown) {
      for (const elem of nav.dropdownOptions) {
        if (this.router.url && this.router.url == elem.page) {
          return true;
        }
      }
      return false;
    }

    return this.router.url && this.router.url == nav.page;
  }
}
