import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com/api';

  constructor( private http: HttpClient) { }
  getnotice(){
    var reqHeader = new HttpHeaders({'content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    let url= this.rootUrl + "/GetNewsPort/Getnews/All/6023/Two";
    return this.http.get(url,{headers:reqHeader});
  }
}
