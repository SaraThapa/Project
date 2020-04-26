import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  subjects: Array<any> = [
    {
      sn: 1,
      subject: 'Science & Environment',
      fullmarks: 100,
      passmarks: 50,
      mo_tho: 64,
      mo_pra: 17,
      total: 81,
      hightest_marks: 100,
      gpa_th: 'A',
      gpa_prac: 'B',
      gpa_total: 'A',
      grade_point: 3.6,
      remarks: '',
    },
    {
      sn: 2,
      subject: 'Speedy Maths',
      fullmarks: 100,
      passmarks: 50,
      mo_tho: 64,
      mo_pra: 17,
      total: 81,
      hightest_marks: 100,
      gpa_th: 'A',
      gpa_prac: 'B',
      gpa_total: 'A',
      grade_point: 3.6,
      remarks: '',
    }
  ];

  constructor(
    private ResultsService: ResultsService,
  ) { }

  ngOnInit(): void {
    // this.ResultsService.getResults().subscribe(data => this.subjects = data);
  }

}
