import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { asRoughYears } from '@fullcalendar/core/datelib/duration';

@Injectable({
  providedIn: 'root'
})
export class UploadresultService {
  readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com/api';
    // readonly rootUrl = 'api';

  constructor(private http: HttpClient) { }
  getuploadresult(cls, section, term, year, subject){
    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'Authorization':
    // "Bearer " + localStorage.getItem('access_Token') });
    // let url="http://kotbotticket-001-site3.btempurl.com/api/RawStudentLedger/GetStudent/One/A/first term/2076/1/6023";
    // let url = this.rootUrl + "/api/RawStudentLedger/GetStudent/one/A/first term/2076/6023";
    let url =`${this.rootUrl}/RawStudentLedger/GetStudent/${cls}/${section}/${term}/${year}/${subject}/6023`;
    return this.http.get(url);
  }
  getsubjects(cls, section, term, year){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });
    // let url = "http://kotbotticket-001-site3.btempurl.com/api/RawStudentSubject/GetSubject/one/A/first term/2076/6023";
   let url =`${this.rootUrl}/RawStudentSubject/GetSubject/${cls}/${section}/${term}/${year}/6023`;
    return this.http.get(url,{headers:reqHeader});
  }
  postsave(StudentId, Class_Stu, Sectionfield, Terms_Exan, Year_exam, Sc_2, col1, Col2, sc_1="6023") {
    var data = "StudentId=" + StudentId + "&Class_Stu=" + Class_Stu + "&Sectionfield=" + Sectionfield + "&Terms_Exan=" + Terms_Exan + "&Year_exam=" + Year_exam + "&Sc_2=" + Sc_2 + "&col1=" + col1 + "&Col2=" + Col2 + "&sc_1=" +sc_1 ;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization':
    "Bearer " + localStorage.getItem('access_Token') });

   let url =`${this.rootUrl}/RawStudentLedger/UpdateCustomer`;
    return this.http.post(url,data, {headers:reqHeader});
  }


}
