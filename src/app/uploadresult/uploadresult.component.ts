import { Component, OnInit } from '@angular/core';
import { UploadresultService } from '../uploadresult.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StudentData } from '../student-data.model';



@Component({
  selector: 'app-uploadresult',
  templateUrl: './uploadresult.component.html',
  styleUrls: ['./uploadresult.component.css']
})
export class UploadresultComponent implements OnInit {


  class='One';
  section='A';
  term='First Term';
  year='2076';
  subjectname=''
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
  constructor(private resultservice: UploadresultService, private router:Router) {  }
  ngOnInit(): void {

  }

  submit(){
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

    this.resultservice.getsubjects(this.class, this.section, this.term, this.year)
    .subscribe(subjects=>{
    console.log(subjects)
    this.subjects=subjects
    })

  }
  loadstudent(){
    // console.log(this.subjectSelected);
    this.resultservice.getuploadresult(this.class, this.section, this.term, this.year, this.subjectSelected)
    .subscribe(allstudent=>{
    console.log(allstudent)
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
    // this.resultservice.postsave(this.allstudent[0].studentid, this.class, this.section, this.term, this.year, this.subjectSelected, this.allstudent[0].theory, this.allstudent[0].practical)
    // .subscribe(response =>{
    //   console.log(response)
    // });
    this.allstudent.forEach(student =>{
      this.resultservice.postsave(student.studentid, this.class, this.section, this.term, this.year, this.subjectSelected, student.theory, student.practical)
      .subscribe(response =>{
        console.log(response)
      });
    });
  }
  theoryFullMarkCheck(i){

    if(this.subjects[this.subjectSelected -1].theory < this.allstudent[i].theory ){
      alert('tsasdfasd');
      this.allstudent[i].theory = this.subjects[this.subjectSelected -1].theory;
    }

  }
}




