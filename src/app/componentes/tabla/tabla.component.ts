import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
 
import * as $ from 'jquery';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import {NavigationExtras, Router} from "@angular/router"
import { BnNgIdleService } from 'bn-ng-idle';
import { LoginComponent } from '../login/login.component';
declare var jQuery:any;
  
//declare var $:any; 
@Component({
  selector: 'app-tabla ',
  templateUrl: './tabla.component.html',
 
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  paginaActual:number=1;
  clickSearch:boolean=false;
  filtrarProducto="";
  constructor(private _servicioProducto:ProductosService,private router:Router ,
    private bnIdle: BnNgIdleService,private loginC:LoginComponent) {
      this.bnIdle.startWatching(3000).subscribe((res) => {
        if(res) {
          alert("tiempo excedido"); 
          this.loginC.order="Excedido"
          window.location.replace("http://localhost:4200/login");
          //this.router.navigate(['login'], { state: {data: "Excedido"} });
        }
      }) 
   } 
   @Input() dataEntrante="entro"
   productos:any;
 
    arrayProd:Array<any>=[];
  
 navigationExtas:NavigationExtras={
      state:{
        id: null,
        producto:null,
        marca:null,
    categoria:null,
    precio: null,
    stock: null,
    idCat:null,
    idMarca:null
      }
  };
  ngOnInit(): void {
    
    
    this.obtenerProductos();
    
    
  }
  buscarProducto()
  {
    if(this.clickSearch==false)
    {
      setTimeout(function(){ $('#buscarProducto').show(1500);  }, 0)
      this.clickSearch=true;
    }
    else
    {
      setTimeout(function(){ $('#buscarProducto').hide(1500);  }, 0)
      this.clickSearch=false;
    }


  }
obtenerProductos()
{
  this._servicioProducto.obtenerProductos().subscribe(productos => {
this.productos=productos
  },
  error => {
    console.log(error);
       
  });
}

eliminarProductos(producto:any)
{
  
  this._servicioProducto.eliminarProducto(producto.id).subscribe(()=>this.obtenerProductos());
   
}
 





 editar(index:any)
 {  
  index+=1;
   let tabla= document.getElementById("tablaProducto") as HTMLTableElement;
    
    
   this.navigationExtas.state!.id =tabla.rows[index].cells[0].innerText
   this.navigationExtas.state!.idCat =tabla.rows[index].cells[1].innerText
   this.navigationExtas.state!.idMarca =tabla.rows[index].cells[2].innerText
   this.navigationExtas.state!.producto =tabla.rows[index].cells[3].innerText
   this.navigationExtas.state!.categoria =tabla.rows[index].cells[4].innerText
   this.navigationExtas.state!.marca =tabla.rows[index].cells[5].innerText
   this.navigationExtas.state!.precio =tabla.rows[index].cells[6].innerText
   this.navigationExtas.state!.stock =tabla.rows[index].cells[7].innerText
       this.router.navigate(["editarProductos"],this.navigationExtas) 
  
}

}
