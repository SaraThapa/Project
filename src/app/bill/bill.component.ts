import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  userClaims: any
  studentId: any
  school_code: any
  last_balance: any = 0
  bills = []

  constructor( private bill: BillService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      var username = this.userClaims.userName;
      username = username.split('@');
      this.studentId = username[0];
      this.school_code = username[1];
      this.bill.getLastBalance(username[0], username[1]).subscribe((data: any) => {
        this.last_balance = data[0].balanceAmount;
      });
      this.bill.getBill(username[0], username[1]).subscribe((data: any) => {
        this.bills = data;
      });
    });
  }
}
