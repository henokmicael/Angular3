import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-student',
  template:`<br><br><br>
  
  
  <a [routerLink]="['profile', 1]">{{data[0].name}}</a><br>
  `,
  
  
  styleUrls: ['./student.component.css'],
   providers: [DbService]
})
export class StudentComponent implements OnInit {
data:any[];
  constructor(private dbservice:DbService) {
  this.data=this.dbservice.getData();

    }

  ngOnInit() {
  }

}
// import { Component, OnInit } from '@angular/core';
// import { DbService } from './db.service';

// @Component({
//   selector: 'app-student',
//   template:`<a href="/profile/1">{{data}}</a> hrhrhr`,
//   styleUrls: ['./student.component.css']
// })
// export class StudentComponent implements OnInit {
// 
//   constructor(private dbservice:DbService) {
// //this.data=this.dbservice.getData();

//    }

//   ngOnInit() {
//   }
