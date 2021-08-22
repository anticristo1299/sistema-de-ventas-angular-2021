import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
@Output() disparadorDeFavorito : EventEmitter<any>= new EventEmitter();
  constructor(private httpClient:HttpClient) {
     
   }
   obtenerProductos(): Observable<any>
   {
    return this.httpClient.get("http://localhost:9092/api/Index/getProducts")
   }
   listarCategorias(): Observable<any>
   {
    return this.httpClient.get("http://localhost:9092/api/Index/getCategory")
   }
   listarMarcas(idCat:number): Observable<any>
   {
    return this.httpClient.get("http://localhost:9092/api/Index/getMarks/"+idCat)
   }
   eliminarProducto(id:any): Observable<any>
   {
    return this.httpClient.delete("http://localhost:9092/api/Index/"+id)
   }
   registrarProductos(producto:any)
   {
     let json =JSON.stringify(producto);
      let headers= new HttpHeaders().set("Content-Type","application/json");
      return this.httpClient.post("http://localhost:9092/api/Index/insertProduct",json,{headers:headers});
   }
   editarProductos(producto:any)
   {
     let json =JSON.stringify(producto);
      let headers= new HttpHeaders().set("Content-Type","application/json");
      return this.httpClient.put("http://localhost:9092/api/Index/"+producto.id,json,{headers:headers});
   }
}
