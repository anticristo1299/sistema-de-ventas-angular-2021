import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   navegacion="";
   @Input() titulo:any;
   
   
  constructor( ) {
 
   }
  
  ngOnInit(): void {
     
  }
redirigir()
{
  window.location.replace("http://localhost:4200/tabla");
}
}
