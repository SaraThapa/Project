import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("Login");
  }

  ngOnInit() {
  }

  OnSubmit(userName: string, password: string) {
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      //localStorage.setItem('Role',data.access_token);
      this.router.navigate(['/']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}