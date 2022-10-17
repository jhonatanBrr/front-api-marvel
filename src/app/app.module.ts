import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudPersonajesComponent } from './componentes/crud-personajes/crud-personajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogCrearPersonajeComponent } from './componentes/crud-personajes/dialogs/dialog-crear-personaje/dialog-crear-personaje.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular material
import {MaterialModule} from './material.module';
import { LoaderComponent } from './componentes/loader/loader.component'


@NgModule({
  declarations: [
    AppComponent,
    CrudPersonajesComponent,
    DialogCrearPersonajeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
