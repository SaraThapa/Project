import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() userClaims: any;

  constructor( private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getUserClaims()
    .subscribe((data: any) => {
      this.userClaims = data;
      });

  }

}
