import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from '../host/host.service';

@Injectable({
  providedIn: 'root'
})
export class PoderesService {

  constructor(
    private http: HttpClient,
    private host:HostService
  ) {
    
   }

  consultarPoderes(): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http.get(`${this.host.host}/poderes`)
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
