import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
//import { HttpClientModule }    from '@angular/common/http';
//import{ Response} from "@angular/http";
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';



@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class UserService {
  // readonly rootUrl = 'http://kotbotticket-001-site3.btempurl.com';
  readonly rootUrl = 'api';

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      // Email: user.Email,
      // FirstName: user.FirstName,
      // LastName: user.LastName
    }
    var reqheader = new HttpHeaders({ 'No-Auth': "True" });
    return this.http.post(this.rootUrl + 'Api/UserLogin/ValidateUser', body, { headers: reqheader });
  }
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/Account/getUserClaims');
  }

}