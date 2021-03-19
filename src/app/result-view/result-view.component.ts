import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  userClaims: any
  userDetails: any
  userResults: any
  userId: any
  schoolId: any
  @Input() term: ''
  @Input() year: ''

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

      var username = this.userClaims.userName;
      username = username.split('@');
      this.userService.getUserDetails(username[0], username[1]).subscribe((data: any) => {
        this.userDetails = data[0];

        this.userService.getUserResults(username[0], this.userDetails.class_Student, this.term, this.userDetails.sectionField, username[1], this.year).subscribe((data: any) => {
          this.userResults = data;

        });
      });
    });
  }

}
