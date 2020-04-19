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
export class OfficersComponent implements OnInit {
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
      header: 'Officer Board',
      type: 'title',
      centered: true
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
