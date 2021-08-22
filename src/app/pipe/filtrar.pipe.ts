import { Pipe, PipeTransform } from '@angular/core';
//import { privateDecrypt } from 'crypto';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
 
    const resultadoProducto=[];
    for(const producto of value)
    {
if(producto.producto.toLowerCase().indexOf(arg.toLowerCase())>-1)
{

  resultadoProducto.push(producto);
}
else if(producto.categoria.toLowerCase().indexOf(arg.toLowerCase())>-1)
{
  
  resultadoProducto.push(producto);
}
else if(producto.marca.toLowerCase().indexOf(arg.toLowerCase())>-1)
{

  resultadoProducto.push(producto);
}
    }
    return resultadoProducto;
  }

}
