import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute,Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
//import {  Router} from '@angular/Router';

@Component({
  selector: 'app-profile',
  template:`<br><br><br>
  <h1>Profile<h1><br>
  Name : {{personalData.name}}<br>
  Email : {{personalData.email}}
  
  `,
  styleUrls: ['./profile.component.css'],
  providers: [DbService]
})
export class ProfileComponent implements OnInit {

 personalData;
 data:any[];
 private id;
 private subscription:Subscription;
  constructor(private dbservice:DbService,private activatedRoute:ActivatedRoute,private router:Router) {
 activatedRoute.params.subscribe(
(param:any)=>this.id=param['id']);
this.data=(this.dbservice.getData());

  console.log("null is reached");
  this.router.navigate([''])

this.personalData=this.data[this.id-1];


    }

  ngOnInit() {
  }
  OnDestroy(){
    this.subscription.unsubscribe();
  }

}
