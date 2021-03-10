import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notices: any;
  userClaims: any
  school_code: any
  userDetails: any

  constructor( private noticeService: NoticeService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.school_code = username[1];
      this.userService.getUserDetails(username[0], username[1]).subscribe((data: any) => {
        this.userDetails = data[0];
        this.noticeService.getNotice(this.userClaims.role, this.school_code, this.userDetails.class_Student).subscribe((data: any) => {
            this.notices=data
        });
      });
    });

  }
}
