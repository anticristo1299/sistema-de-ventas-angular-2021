import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sentencia-if',
  templateUrl: './sentencia-if.component.html',
  styleUrls: ['./sentencia-if.component.css']
})
export class SentenciaIfComponent implements OnInit {

  constructor() { }
  public txtEdad:string="";
  public edad:string="";
  public edadInt:number=0
  public personas:Array<string> =["jose","zamudio","biale"]
  ngOnInit(): void {
    
  }
  Calcular(){
      this.edadInt=parseInt(this.txtEdad)
    if(this.edadInt>=18)
    {
      this.edad="Sos mayor de edad "
      for (let nombre of this.personas)
      {
        this.edad+=nombre+", "

      }
    }
    else if(this.edadInt < 0)
    {
      this.edad="Todavia no has nacido"
    }
    else
    this.edad="Sos menor de edad"
  }

}
