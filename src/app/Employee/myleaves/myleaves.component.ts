import { Component, OnInit } from '@angular/core';
export class MyList {
  sno: number
  appliedOn: string;
  from: string;
  to: string;
  type: string;
  status: string;
}
const state=false;

const data: MyList[] = [
 {sno: 1, appliedOn: '1/05/2020', from: '5/05/2020', to: '10/05/2020', type: 'paid',status:'approved'},
 {sno: 2, appliedOn: '1/06/2020', from: '5/06/2020', to: '10/06/2020', type: 'unpaid',status:'rejected'},
 {sno: 3, appliedOn: '1/07/2020', from: '5/07/2020', to: '10/07/2020', type: 'paid',status:'approved'},
];
@Component({
  selector: 'app-myleaves',
  templateUrl: './myleaves.component.html',
  styleUrls: ['./myleaves.component.less']
})
export class MyleavesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // displayedColumns: string[] = ['sno', 'appliedOn', 'from', 'to', 'type', 'status'];
  
}
