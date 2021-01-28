import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadresultService {
  readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com/api';
    // readonly rootUrl = 'api';
  
  constructor(private http: HttpClient) { }
  getuploadresult(){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'Authorization': 
    "Bearer " + localStorage.getItem('access_Token') });
    let url="http://kotbotticket-001-site3.btempurl.com/api/RawStudentLedger/GetStudent/One/A/First term/2076/6023";
    // let url = this.rootUrl + "/api/RawStudentLedger/GetStudent/one/A/first term/2076/6023";
    return this.http.get(url,{headers:reqHeader});
  }
  getsubjects(cls, section, term, year){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'Authorization': 
    "Bearer " + localStorage.getItem('access_Token') });
    // let url = "http://kotbotticket-001-site3.btempurl.com/api/RawStudentSubject/GetSubject/one/A/first term/2076/6023";
   let url =`${this.rootUrl}/RawStudentSubject/GetSubject/${cls}/${section}/${term}/${year}/6023`;
    return this.http.get(url,{headers:reqHeader});
  }
  

}
