
import { OnInit, Component } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // isLoginError: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
  }
  OnSubmit() {

  }
}


