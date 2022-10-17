import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  loader:boolean = false;
  constructor() { }

  activarLoader(){
    this.loader = true
  }

  quitarLoader(){
    this.loader = false
  }
}
