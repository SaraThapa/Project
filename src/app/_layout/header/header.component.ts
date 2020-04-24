import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {
  userClaims: any

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });

  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])

  }

}
