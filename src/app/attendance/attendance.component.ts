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

  isSelectError: boolean = false
  month: any = ''
  year: any = ''

  fullAttendance: any



  constructor( private attendace: AttendanceService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.studentId = username[0];
      this.school_code = username[1];
      var date = new Date().toISOString().split('T')[0];
      // console.log(date);
      this.attendace.getAttendance(username[0],date,date, username[1]).subscribe((data: any) => {
        this.attendance = data[0];
      });
    });
  }

  submit(){
    if(!this.month){
      this.isSelectError = true;
      return false;
    }
    if(!this.year){
      this.isSelectError = true;
      return false;
    }
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.school_code = username[1];
      this.attendace.getFullAttendance(username[0], this.month, this.year, username[1]).subscribe((data: any) => {
        this.fullAttendance = data[0];
      });
    });
  }

}
