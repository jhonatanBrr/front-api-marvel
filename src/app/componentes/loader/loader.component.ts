import { Component, OnInit } from '@angular/core';
import { UtilidadesService } from 'src/servicios/utilidades/utilidades.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
    public UTIL:UtilidadesService 
  ) { }

  ngOnInit(): void {
  }

}
