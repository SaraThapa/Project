import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  //  readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com';
  readonly rootUrl = '/api';

  constructor( private http: HttpClient) { }
  getAttendance(studentID,from_date, to_date, school_code){
    var reqHeader = new HttpHeaders({'content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    let url= `${this.rootUrl}/api/AttedanceStu/GetattedanceStu/${studentID}/${from_date}/${to_date}/${school_code}`;
    return this.http.get(url,{headers:reqHeader});
  }
  getFullAttendance(studentID,month, year, school_code){
    var reqHeader = new HttpHeaders({'content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    let url= `${this.rootUrl}/api/AttedancebyMonthStu/GetattedanceMonthly/${studentID}/${month}/${year}/${school_code}`;
    return this.http.get(url,{headers:reqHeader});
  }
}
