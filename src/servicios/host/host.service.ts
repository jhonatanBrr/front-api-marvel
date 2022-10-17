import { Injectable } from '@angular/core';
import {localService} from '../../variables.globales'

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor() { }

  // produccion ->  'https://apimarvel-production.up.railway.app'
  host:string = 'https://apimarvel-production.up.railway.app'


}
