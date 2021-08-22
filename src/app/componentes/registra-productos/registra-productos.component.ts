import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormBuilder,Validator, FormControl, Validators } from '@angular/forms';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-registra-productos',
  templateUrl: './registra-productos.component.html',
  styleUrls: ['./registra-productos.component.css'],
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
   
  */]
})
export class RegistraProductosComponent implements OnInit {
  categorias:any;
  marcas:any;
  animacion="ocultar";
  //productos:any={producto: "", precio:0,stock:0,categorias:0,marcas:0}

  
  productoForm!: FormGroup;
  
  formulario(formBuilder: FormBuilder)
  {
    this.productoForm = formBuilder.group({
      producto: new FormControl("",Validators.required),
      precios: new FormControl("",Validators.required),
      stock: new FormControl("",Validators.required),
      idMarca: new FormControl("",Validators.required),
      idCat: new FormControl("",Validators.required) 
    });
  }
  constructor(private _servicioProducto:ProductosService,formBuilder: FormBuilder) {
    this.listarCategorias();
       this.formulario(formBuilder);
   }
  ngOnInit(): void {
    this.listarCategorias();
    
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
  //this.animacion=this.animacion==="ocultar" ? "mostrar" : "ocultar";
}
 registrarProducto()
 {
   if(this.productoForm.valid)
   {
     console.log(this.productoForm.value)
     this._servicioProducto.registrarProductos(this.productoForm.value).subscribe();
     this.productoForm.reset()
       //aca cada vez que actualizo subo al top
  var dest = $(".container").offset().top;
  $("html, body").animate({scrollTop: dest},600);
  setTimeout(function(){ $('#productoRegistrado').show(1500);  }, 0)
setTimeout(function(){ $('#productoRegistrado').hide(3000);  }, 3000)
$("html, body").animate({ scrollTop: 0 }, "slow");
   }else
   console.log("no valido")
 }  
 capturarIdCat()
 {let   idCat=0;
    idCat=$('select[name="comboboxCategoria"] option:selected').val();
    this.listarMarcas(idCat)
   
 }
}
