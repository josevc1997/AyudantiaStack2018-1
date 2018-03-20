import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EntradasComponent } from './entradas/entradas.component';

import { EntradasService } from './services/entradas.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    NavbarComponent,
    IngresarEntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [EntradasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
