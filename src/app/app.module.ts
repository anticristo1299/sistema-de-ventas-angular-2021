import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SentenciaIfComponent } from './componentes/sentencia-if/sentencia-if.component';
import { SentenciaForComponent } from './componentes/sentencia-for/sentencia-for.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ProductosService } from './servicios/productos/productos.service';
import { SidebarModule } from 'ng-sidebar';
import {HttpClientModule } from '@angular/common/http';
import { SlideBarComponent } from './componentes/slide-bar/slide-bar.component'
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistraProductosComponent } from './componentes/registra-productos/registra-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { LoginComponent } from './componentes/login/login.component'; // import bn-ng-idle service
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltrarPipe } from './pipe/filtrar.pipe'; 
const rutas: Routes =[  
{
  path:'tabla',
  component:TablaComponent
},{
  path:'login',
  component:LoginComponent
},
{
  path:'registraProductos',
  component:RegistraProductosComponent
},
{
  path:'editarProductos',
  component:EditarProductoComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    SentenciaIfComponent,
    SentenciaForComponent,
    TablaComponent,
    SlideBarComponent,
    HeaderComponent,
    RegistraProductosComponent,
    UsuarioComponent,
    EditarProductoComponent,
    LoginComponent,
    FiltrarPipe
    
  ],
  exports:[
HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ProductosService,HeaderComponent,BnNgIdleService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
