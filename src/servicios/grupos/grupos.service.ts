import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from '../host/host.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(
    private http: HttpClient,
    private host:HostService
  ) {
    
   }

  consultarGrupos(): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.host}/grupos`)
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
