import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
//'use strict';
//var  sessionstorage   = require ( ' sessionstorage ' ) ; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() tiempo:any; 
order:any;
  constructor(  ) {
     
   }
  ngOnInit(): void {
    //this.order=history.state.data;
    //console.log(this.order);
    /*if(history.state.data){
      this.order=history.state.data;
      sessionStorage.setItem('order_page_info', JSON.stringify(this.order));
    }else{
      this.order = JSON.parse(sessionstorage .getItem('order_page_info'))
      
    }*/
   
  }
  login()
  {
     
    window.location.replace("http://localhost:4200/tabla");
     
  }
}
