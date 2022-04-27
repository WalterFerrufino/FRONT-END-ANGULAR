import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosServicio:ServicioService) { }

  ngOnInit(): void {
    this.datosServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
    
  }

}
