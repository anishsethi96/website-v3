import { Component, OnInit } from '@angular/core';

interface OBoard {
  title: string;
  captain: string;
  firstLt: string;
  secondLt: string;
  president: string;
  vicePresident: string;
}

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class RpiaAboutComponent implements OnInit {
  private readonly currentOBoard: OBoard = {
    title: "Current Officer Board (2019-2020)",
    captain: "Caleb Woodson",
    firstLt: "Nathaniel Foye",
    secondLt: "Martin Smith",
    president: "Yaseen Mahmoud",
    vicePresident: "Nathan Buckley"
  };

  private readonly pastOBoards: OBoard[] = [
    {
      title: "Officer Board Spring 2019",
      captain: "Quazi Hossain",
      firstLt: "John Jacangelo",
      secondLt: "Logan Ramos",
      president: "Mary Clare Crochiere",
      vicePresident: "Ingrid Oprea"
    },
    {
      title: "Officer Board Fall 2018",
      captain: "David Wolmark",
      firstLt: "John Jacangelo",
      secondLt: "Logan Ramos",
      president: "Mary Clare Crochiere",
      vicePresident: "Ingrid Oprea"
    },
    {
      title: "Officer Board 2017-2018",
      captain: "Harrison Leinweber",
      firstLt: "David Sparkman",
      secondLt: "Sean Waclawik",
      president: "Ciera Williams",
      vicePresident: "Justina Thompson"
    },
    {
      title: "Officer Board 2016-2017",
      captain: "Joshua Correira",
      firstLt: "Harrison Leinweber",
      secondLt: "Jody Ostrander",
      president: "Zackery White",
      vicePresident: "Mary Clare Crochiere"
    },
    {
      title: "Officer Board 2015-2016",
      captain: "Tom Manzini",
      firstLt: "Brittany Rupp",
      secondLt: "Harrison Leinweber",
      president: "Ciera Williams",
      vicePresident: "Rebecca Martin"
    },
    {
      title: "Officer Board Spring 2015",
      captain: "Tom Manzini",
      firstLt: "Jordan Williams",
      secondLt: "Brittany Rupp",
      president: "Alexander Benzell",
      vicePresident: "Rebecca Martin"
    },
    {
      title: "Officer Board Fall 2014",
      captain: "Breanna Bernardi",
      firstLt: "Drew Kopicki",
      secondLt: "Jordan Williams",
      president: "Alli Morgan",
      vicePresident: "Elise Romberger"
    }
  ];

  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'About RPI Ambulance',
      type: 'title',
      centered: true
    },
    {
      internalTitle: 'About Text',
      type: 'text',
      body: `RPI Ambulance is a student run and operated Basic Life Support (BLS) transporting ambulance agency
        that serves the RPI campus and surrounding communities. We respond to approximately 150 to 200 calls
        and provide first aid coverage to about 30 special events every academic year. All students of RPI are
        eligible to join RPI Ambulance, no previous experience is necessary. Members can train to become drivers,
        crew chiefs or just come to help out!`
    },
    {
      internalTitle: 'Ambulance Image',
      type: 'img',
      img: 'assets/new_fleet.jpg',
      width: '75%',
      alt: 'RPI Ambulance\'s Fleet',
      centered: true
    },
    {
      internalTitle: 'History',
      type: 'text',
      header: 'Our History',
      body: `RPI Ambulance was founded in 1977 as the first EMS agency in Troy and the surrounding
        area. Today, RPIA serves the RPI campus as well as some of the surrounding towns. We mainly respond to
        on-campus calls, but also receive mutual aid calls to Brunswick, North Greenbush (including Wynantskill
        and Defreestville), and Poestenkill.`
    },
    {
      type: 'text',
      body: `The officers of RPI Ambulance are elected each year in April. The officers perform day to day and long
        term operational and administrative tasks. In 2009, the RPI Ambulance Constitution was changed to reduce the
        officer board from 8 officers to 5 consolidating "non-steering" positions into more important roles. This will
        allow for a smaller, more efficient officer board and the opportunity for more members to become involved with
        non-elected coordinator positions.`
    },
    {
      type: 'text',
      header: 'Current Officer Board',
      centered: true,
      body: `
        <div class="row">
          <div class="col-md-6 text-center">
            <p class="small"><strong>Line Side Officers</strong></p>
            <div class="row">
              <div class="col-sm-4">
                <p><strong>${this.currentOBoard.captain}</strong><br>Captain</p>
              </div>
              <div class="col-sm-4">
                <p><strong>${this.currentOBoard.firstLt}</strong><br>First Lieutenant</p>
              </div>
              <div class="col-sm-4">
                <p><strong>${this.currentOBoard.secondLt}</strong><br>Second Lieutenant</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <p class="small"><strong>Civil Side Officers</strong></p>
            <div class="row">
              <div class="col-sm-4 offset-sm-2">
                <p><strong>${this.currentOBoard.president}</strong><br>President</p>
              </div>
              <div class="col-sm-4">
                <p><strong>${this.currentOBoard.vicePresident}</strong><br>Vice President</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      internalTitle: 'Officer Board Image',
      type: 'img',
      img: 'assets/oboard.jpg',
      alt: 'The current Officer Board',
      centered: true
    },
    {
      type: 'divider'
    },
    {
      type: 'text',
      header: 'Past Officer Boards',
      centered: true,
      body: `<div class="row">${this.pastOBoards.map(oboard => this.createPastOboardHtml(oboard)).join(' ')}</div>`
    }
  ];

  createPastOboardHtml(oboard: OBoard): string {
    return `
        <div class="col-12 col-md-6">
          <p><strong>${oboard.title}</strong></p>
          <table class="table small table-bordered table-compressed">
            <tr><td colspan="2"><strong>Line Side:</strong></td></tr>
            <tr><td><strong>Captain</strong></td><td>${oboard.captain}</td></tr>
            <tr><td><strong>First Lieutenant</strong></td><td>${oboard.firstLt}</td></tr>
            <tr><td><strong>Second Lieutenant</strong></td><td>${oboard.secondLt}</td></tr>
            <tr><td colspan="2"><strong>Civil Side:</strong></td></tr>
            <tr><td><strong>President</strong></td><td>${oboard.president}</td></tr>
            <tr><td><strong>Vice President</strong></td><td>${oboard.vicePresident}</td></tr>
          </table>
          <hr>
        </div>`;
  }

  constructor() { }
  ngOnInit() { }
}
