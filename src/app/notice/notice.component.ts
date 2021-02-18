import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notices: any;

  constructor( private NoticeService: NoticeService) { }

  ngOnInit(): void {
    this.NoticeService.getnotice()
    .subscribe(notices=>{
    console.log(notices)
    this.notices=notices
    })
  }
}
