import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CondicionesService } from 'src/servicios/condiciones/condiciones.service';
import { GruposService } from 'src/servicios/grupos/grupos.service';
import { VehiculosService } from 'src/servicios/vehiculos/vehiculos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonajesService } from 'src/servicios/personajes/personajes.service';
import { UtilidadesService } from 'src/servicios/utilidades/utilidades.service';
import { PoderesService } from 'src/servicios/poderes/poderes.service';

@Component({
  selector: 'app-dialog-crear-personaje',
  templateUrl: './dialog-crear-personaje.component.html',
  styleUrls: ['./dialog-crear-personaje.component.scss']
})
export class DialogCrearPersonajeComponent implements OnInit {

  grupos:any = [];
  vehiculos:any = [];
  condiciones:any = [];
  poderes:any = [];
  
  poder:any;
  
  titulo:string = 'Crear personaje'
  boton_titulo:string = 'Crear'
  
  formCrearPersonaje = new FormGroup({
    nombre             : new FormControl('',Validators.required),
    lugar_operacion    : new FormControl('',Validators.required),
    grupo_id           : new FormControl(null,Validators.required),
    vehiculo_id        : new FormControl(null),
    imagen             : new FormControl(''),
    condicion_id       : new FormControl(null,Validators.required),
  })
  
  chipsPOderes:any =[];

  loader:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogCrearPersonajeComponent>,
    private GruposService:GruposService,
    private VehiculosService:VehiculosService,
    private CondicionesService:CondicionesService,
    private PersonajesService:PersonajesService,
    // private UTIL:UtilidadesService,
    private PoderesService:PoderesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    console.log(this.data);
    if (this.data) {
      this.titulo = "Actualizar personaje"
      this.boton_titulo = "Actualizar"
    }
    
  }

  async ngOnInit() {
    this.consultarGrupos();
    this.consultarVehiculos();
    this.consultarCondiciones();
    this.consultarPoderes();
    if (this.data) {
      this.cargarDatos()
    }
  }

  async consultarGrupos(){
    this.loader = true;
    try {
      let res = await this.GruposService.consultarGrupos();
      this.grupos = res;
    } catch (error) {
      console.log(error);
    }finally{
      this.loader = false
    }
  }

  async consultarCondiciones(){
    this.loader = true;
    try {
      let res = await this.CondicionesService.consultarCondiciones();
      this.condiciones = res;
    } catch (error) {
      console.log(error);
    }finally{
      this.loader = false;
    }
  }

  async consultarVehiculos(){
    this.loader = true;
    try {
      let res = await this.VehiculosService.consultarVehiculos();
      this.vehiculos = res;
    } catch (error) {
      console.log(error);
    }finally{
      this.loader = false;
    }
  }

  async consultarPoderes(){
    this.loader = true;
    try {
      let res = await this.PoderesService.consultarPoderes();
      this.poderes = res;
    } catch (error) {
      console.log(error);
    }finally{
      this.loader = false;
    }
  }

  cargarDatos(){
    this.formCrearPersonaje.patchValue({
      nombre             : this.data.nombre,
      lugar_operacion    : this.data.lugar_operacion,
      grupo_id           : this.data.grupo_id,
      vehiculo_id        : this.data.vehiculo_id,
      imagen             : this.data.imagen,
      condicion_id       : this.data.condicion_id
    })
  }

  async crearPersonaje(){
    if (!this.data) {
      console.log({...this.formCrearPersonaje.value, poderes: this.chipsPOderes});
      try {
        await this.PersonajesService.crearPersonaje({...this.formCrearPersonaje.value, poderes: this.chipsPOderes});
        window.alert('Personaje creado correctamente')
        this.reiniciarFormulario();
      } catch (error) {
        console.log(error);
      }
    }else{
      try {
        await this.PersonajesService.actualizarPersonaje(this.data.id ,{...this.formCrearPersonaje.value});
        window.alert('Personaje Actualizado correctamente')
        this.reiniciarFormulario();
      } catch (error) {
        console.log(error);
      }
    }
  }

  reiniciarFormulario(){
    this.formCrearPersonaje.patchValue({
      nombre             : "",
      lugar_operacion    : "",
      grupo_id           : null,
      vehiculo_id        : null,
      imagen             : "",
      condicion_id       : null
    })
    this.chipsPOderes = [];
  }

  eliminarChip(chip:any){
    this.chipsPOderes = this.chipsPOderes.filter((poder:any) => poder.id != chip.id);
    this.poderes.push(chip)
  }

  addChip(chip:any){
    this.poderes = this.poderes.filter((poder:any) => poder.id != chip.id);
    this.chipsPOderes.push(chip)
  }

  close(){
    this.dialogRef.close()
  }

}
