import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/servicios/personajes/personajes.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCrearPersonajeComponent } from './dialogs/dialog-crear-personaje/dialog-crear-personaje.component';
import { UtilidadesService } from 'src/servicios/utilidades/utilidades.service';

@Component({
  selector: 'app-crud-personajes',
  templateUrl: './crud-personajes.component.html',
  styleUrls: ['./crud-personajes.component.scss']
})
export class CrudPersonajesComponent implements OnInit {

  buscador:string = '';
  personajes:any = [];
  personajesFiltrados:any;

  vehiculo:any;
  constructor(
    private PersonajesService:PersonajesService,
    public dialog: MatDialog,
    private UTIL:UtilidadesService
  ) { }

  async ngOnInit() {
    this.consultarPersonajes();  
  }
  
  async consultarPersonajes(){
    this.UTIL.activarLoader();
    try {
      let res = await this.PersonajesService.consultarPersonajes();
      this.personajes = res;
    } catch (error) {
      console.log(error);
    }finally{
      this.personajesFiltrados = this.personajes;
      this.UTIL.quitarLoader();
    }
  }

  cargarVehiculo(vehiculo:any){
    this.vehiculo = vehiculo;
  }

  poderes:any = [];
  cargarPoderes(poderes:any){
    this.poderes = poderes;
  }

  abrirDialogCrear(){
    const dialogRef = this.dialog.open(DialogCrearPersonajeComponent,{
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.consultarPersonajes();
    })

  }

  filtrarPersonajes(){
    console.log(this.buscador);
    this.personajesFiltrados = this.personajes.filter((p:any) => p.nombre.toLowerCase().includes(this.buscador.toLowerCase()) 
    || p.lugar_operacion.toLowerCase().includes(this.buscador.toLowerCase()) )
    
  }


  editarPersonaje(personaje:any){
    const dialogRef = this.dialog.open(DialogCrearPersonajeComponent,{
      data: personaje,
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.consultarPersonajes();
    })
  }


}
