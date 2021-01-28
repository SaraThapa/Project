import { Component, OnInit } from '@angular/core';
import { UploadresultService } from '../uploadresult.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-uploadresult',
  templateUrl: './uploadresult.component.html',
  styleUrls: ['./uploadresult.component.css']
})
export class UploadresultComponent implements OnInit {
  // data: any;
  // mark = Array();
  name_field='';
  marks='';
  class='';
  section='';
  term='';
  year='';
  subjects:any;
  isSelectError: boolean = false
  allstudent:any
  constructor(private resultservice: UploadresultService, private router:Router) {}
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
    this.resultservice.getuploadresult()
    .subscribe(allstudent=>{
    console.log(allstudent)
     this.allstudent=allstudent
    })    
  }
  save(){
    
  }
}
 
  


