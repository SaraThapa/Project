import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  userClaims: any
  studentId: any
  school_code: any
  attendance:any

  constructor( private attendace: AttendanceService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.studentId = username[0];
      this.school_code = username[1];
      var date = new Date().toISOString().split('T')[0];
      console.log(date);
      this.attendace.getAttendance(username[0],date,date, username[1]).subscribe((data: any) => {
        this.attendance = data[0];
      });
    });
  }

}
