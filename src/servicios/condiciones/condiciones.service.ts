import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from '../host/host.service';

@Injectable({
  providedIn: 'root'
})
export class CondicionesService {

  constructor(
    private http: HttpClient,
    private host:HostService
  ) {
    
   }

  consultarCondiciones(): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.host}/condiciones`)
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
