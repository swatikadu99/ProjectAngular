import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.less']
})
export class LeaverequestComponent implements OnInit {
item ={empId:101,name:"abc", dept:"IT"}
  constructor() { }

  ngOnInit(): void {
  }

}
