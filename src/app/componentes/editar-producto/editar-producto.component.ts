import { Component, OnInit,Input } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormBuilder,Validator, FormControl, Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
  animations:[/*
    trigger("animacionAlert",[
      state("mostrar",style({
        display:"block"
      })),
      state("ocultar",style({
        display:"none"
      })),
      transition("ocultar => mostrar",
      animate("0s")),
      transition("mostrar => ocultar", //aca se oculta solamente si doy click en el boton para registrar, en caso de arreglar animación ver eso
      animate("2s"))
    ])
   
  */ ]
})
export class EditarProductoComponent implements OnInit {
  value: any = null;
  categorias:any;
  marcas:any;
  //animacion="ocultar";
  navegacion:NavigationExtras={
    state:{
      navegacion: ""
    }
  };
  productosEditar = {
    id:  "",
    producto:"" ,
    marca:"",
  categoria:"",
  precio: "",
  stock: "",
  idCat:"",
  idMarca: ""
  };
  productosEditarSQL = {
    id:  0,
    producto:"" ,
    idMarca:0,
  idCat:0,
  precios: 0,
  stock: 0
  };
  constructor(private _servicioProducto:ProductosService,formBuilder: FormBuilder,private router:Router,private headerComponent : HeaderComponent) { 
    const navigation =this.router.getCurrentNavigation();
    this.productosEditar.producto =  navigation?.extras?.state!.producto;
    this.productosEditar.categoria =  navigation?.extras?.state!.categoria;
    this.productosEditar.stock =  navigation?.extras?.state!.stock;
    this.productosEditar.precio =  navigation?.extras?.state!.precio;
    this.productosEditar.marca =  navigation?.extras?.state!.marca;
    this.productosEditar.id =  navigation?.extras?.state!.id;
    this.productosEditar.idCat =  navigation?.extras?.state!.idCat;
    this.productosEditar.idMarca =  navigation?.extras?.state!.idMarca; 
  }
 
  ngOnInit(): void {
    this.listarCategorias();
     
    this._servicioProducto.disparadorDeFavorito.subscribe(data => {
      console.log("entrando"+data);
    }) 
 this.headerComponent.ngOnInit(); 
  }
  listarCategorias()
  {
    this._servicioProducto.listarCategorias().subscribe(categorias => {
  this.categorias=categorias
    },
    error => {
      console.log(error);
         
    });
  }
  listarMarcas(id:any)
  {
    this._servicioProducto.listarMarcas(id).subscribe(marcas => {
  this.marcas=marcas
    },
    error => {
      console.log(error);
         
    });
  }
animacionAlert()
{
 // this.animacion=this.animacion==="ocultar" ? "mostrar" : "ocultar";
}
 editarProducto()
 {
   
  this.productosEditarSQL.producto=$("#txtProducto").val();
  this.productosEditarSQL.idCat=parseInt($("#cmbCategoria").val());
  this.productosEditarSQL.idMarca=parseInt($("#cmbMarca").val());
  this.productosEditarSQL.stock=parseFloat($("#txtStock").val());
  this.productosEditarSQL.precios=parseFloat($("#txtPrecio").val());
  this.productosEditarSQL.id= parseInt($("#idProducto").val());
  this._servicioProducto.editarProductos(this.productosEditarSQL).subscribe();
  //aca cada vez que actualizo subo al top
  var dest = $(".container").offset().top;
                $("html, body").animate({scrollTop: dest},600);
                $(".container").offset().top;
    
 
setTimeout(function(){ $('#productoEditado').show(1500);  }, 0)
setTimeout(function(){ $('#productoEditado').hide(3000);  }, 3000)
$("html, body").animate({ scrollTop: 0 }, "slow");



 }  
 capturarIdCat()
 {let   idCat=0;
    idCat=$('select[name="comboboxCategoria"] option:selected').val();
    this.listarMarcas(idCat)
    $("#cmbCategoria option:selected").remove();
    $("#cmbMarca option:selected").remove();
  // let idMarca=$('select[name="cmbMarca"] option:selected').val();
    
 }
 
}
