import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  PageTitle: '';

  constructor() {
  }

  ngOnInit(): void {
  }

  setTitle($event) {
    this.PageTitle = $event;
  }

}
