import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  // readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com';
  readonly rootUrl = 'api';
  constructor(private http: HttpClient) { }

  getResults() {
    // return this.http.get(this.rootUrl + '/api/GradeView/GetSubject/two/first term/2076/A/1091');
    return [

    ]
  }
}
