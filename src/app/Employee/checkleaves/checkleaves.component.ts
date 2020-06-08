import { Component, OnInit } from '@angular/core';
export interface MyList {
  sno:number; 
  type:string;
  total:number;
  taken:number;
  balance:number;
 }
 const data: MyList[] = [
   {sno:1,type:"Earned Leave",total:30,taken:15,balance:15},
   {sno:2,type:"Casual Leave",total:12,taken:6,balance:6},
   {sno:3,type:"Sick Leave",total:12,taken:5,balance:7},
   {sno:4,type:"ML/PL",total:84,taken:0,balance:84},
  
  ];
@Component({
  selector: 'app-checkleaves',
  templateUrl: './checkleaves.component.html',
  styleUrls: ['./checkleaves.component.less']
})
export class CheckleavesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
