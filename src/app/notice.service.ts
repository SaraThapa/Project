import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  // readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com';
  readonly rootUrl = '/api';

  constructor( private http: HttpClient) { }
  getNotice(role, school_code, cls){
    var reqHeader = new HttpHeaders({'content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    // let url= this.rootUrl + "api/GetNewsPort/Getnews//6023/Two";
    let url= `${this.rootUrl}/api/GetNewsPort/Getnews/${role}/${school_code}/${cls}`;
    return this.http.get(url,{headers:reqHeader});
  }
}
