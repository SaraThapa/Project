import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() userClaims: any;
  @Input() userDetails: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }

}
