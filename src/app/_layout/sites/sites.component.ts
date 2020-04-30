import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  PageTitle: '';
  userClaims: any
  userDetails: any

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.userService.getUserDetails(username[0], username[1]).subscribe((data: any) => {
        this.userDetails = data[0];
      });
    });

  }

  setTitle($event) {
    this.PageTitle = $event;
  }

}
