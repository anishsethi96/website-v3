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
      type: 'divider'
    },
    {
      type: 'text',
      teamheader: 'Meet the Team',
      centered: true,
      body: `
        <div class="row">
          <div class="col-md-6 text-center">
            <p class="small"><strong>Line Side Officers</strong></p>
            <div class="row">
              <div class="col-sm-4">
                <img src="../../../assets/person.png"," alt="Smiley face" height="150" width="150">
                <p><strong>${this.currentOBoard.captain}</strong><br>Captain</p>
              </div>
              <div class="col-sm-4">
                <img src="../../../assets/person.png"," alt="Smiley face" height="150" width="150">
                <p><strong>${this.currentOBoard.firstLt}</strong><br>First Lieutenant</p>
              </div>
              <div class="col-sm-4">
                <img src="../../../assets/person.png"," alt="Smiley face" height="150" width="150">
                <p><strong>${this.currentOBoard.secondLt}</strong><br>Second Lieutenant</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <p class="small"><strong>Civil Side Officers</strong></p>
            <div class="row">
              <div class="col-sm-4 offset-sm-2">
                <img src="../../../assets/person.png"," alt="Smiley face" height="150" width="150">
                <p><strong>${this.currentOBoard.president}</strong><br>President</p>
              </div>
              <div class="col-sm-4">
                <img src="../../../assets/person.png"," alt="Smiley face" height="150" width="150">
                <p><strong>${this.currentOBoard.vicePresident}</strong><br>Vice President</p>
              </div>
            </div>
          </div>
        </div>
      `
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
  ];

  constructor() { }
  ngOnInit() { }
}
