import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamScheduleService {
  readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com';
  // readonly rootUrl = '/api';

  constructor( private http: HttpClient) { }
  getExamSchedule(cls, section, term, yr, school_code){
    var reqHeader = new HttpHeaders({'content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    // let url= this.rootUrl + "api/GetNewsPort/Getnews//6023/Two";
    let url= `${this.rootUrl}/api/GetExamSchedule/Getschedule/${cls}/${section}/${term}/${yr}/${school_code}`;
    return this.http.get(url,{headers:reqHeader});
  }
}
