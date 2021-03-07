import { Component, OnInit } from '@angular/core';
import { UploadresultService } from '../uploadresult.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';




@Component({
  selector: 'app-uploadresult',
  templateUrl: './uploadresult.component.html',
  styleUrls: ['./uploadresult.component.css']
})
export class UploadresultComponent implements OnInit {


  class='';
  section='';
  term='';
  year='';
  subjectname='';
  subjects:any;
  isSelectError: boolean = false
  isMarksError: boolean =false
  ismarks: boolean =false
  theorymark = Array();
  practicalmark = Array();
  student_id= Array();
  subjectSelected:any;
  allstudent:any
  theory:'';
  fullpractical:'';

  userClaims: any
  school_code: any

  constructor(private resultservice: UploadresultService, private router:Router, private userService: UserService,) {  }
  ngOnInit(): void {

    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

      var username = this.userClaims.userName;
      username = username.split('@');
      this.school_code = username[1];

    });

  }

  submit(){
    this.subjects = [];
    this.allstudent = [];

    if(!this.class){
      this.isSelectError = true;
      return false;
    }
    if(!this.section){
      this.isSelectError = true;
      return false;
    }
    if(!this.term){
      this.isSelectError = true;
      return false;
    }
    if(!this.year){
      this.isSelectError = true;
      return false;
    }

    this.resultservice.getsubjects(this.class, this.section, this.term, this.year, this.school_code)
    .subscribe(subjects=>{
    this.subjects=subjects
    })

  }
  loadstudent(){
    this.allstudent = [];
    // console.log(this.subjectSelected);
    this.resultservice.getuploadresult(this.class, this.section, this.term, this.year, this.subjectSelected, this.school_code)
    .subscribe(allstudent=>{
     this.allstudent=allstudent
    })
  }
  onSubmit(data){
    console.warn(data);
  }
  submitSubject(data){
    console.warn(data);
  }
  studentMarksave(){
    this.allstudent.forEach(student =>{
      this.resultservice.postsave(student.studentid, this.class, this.section, this.term, this.year, this.subjectSelected, student.theory, student.practical, this.school_code)
      .subscribe(response =>{
        console.log(response)
      });
    });
  }
  theoryFullMarkCheck(i){
    if(this.subjects[this.subjectSelected -1].fullTheory < this.allstudent[i].theory ){
      alert('please enter correct number')
      this.allstudent[i].theory = this.subjects[this.subjectSelected -1].fullTheory;
    }
  }
  practicalFullMarkCheck(i){
    if(this.subjects[this.subjectSelected -1].fullpratical < this.allstudent[i].practical ){
      alert('please enter correct number')
      this.allstudent[i].practical = this.subjects[this.subjectSelected -1].fullpratical;
    }
  }
}




