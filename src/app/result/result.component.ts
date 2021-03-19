import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  term = ''
  term_value = ''
  year = ''

  constructor() { }

  ngOnInit(): void {
  }

  viewResult() {
    // this.term = ''
    this.term = this.term_value
  }

}
