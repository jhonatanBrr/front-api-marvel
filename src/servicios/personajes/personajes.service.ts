import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from '../host/host.service';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient,
    private host:HostService
  ) {
    
   }

  consultarPersonajes(): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.host}/personajes`)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
    })
  }

  crearPersonaje(data:any): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.post(`${this.host.host}/personajes/crear`,data)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
    })
  }

  actualizarPersonaje(id:number,data:any): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.put(`${this.host.host}/personajes/${id}`,data)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        )
    })
  }
}
