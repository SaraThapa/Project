import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ExamScheduleService } from '../exam-schedule.service';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {
  year = ''
  term = ''
  isSelectError: boolean = false
  schedules = [];
  userClaims: any
  school_code: any
  userDetails: any

  constructor( private examSchedule: ExamScheduleService, private userService: UserService) { }

  ngOnInit(): void {

  }

  submit(){
    if(!this.term){
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
      this.userService.getUserDetails(username[0], username[1]).subscribe((data: any) => {
        this.userDetails = data[0];
        this.examSchedule.getExamSchedule(
          this.userDetails.class_Student,
          this.userDetails.sectionField,
          this.term,
          this.year,
          this.school_code
        ).subscribe((data: any) => {
            this.schedules=data
        });
      });
    });
  }

}
