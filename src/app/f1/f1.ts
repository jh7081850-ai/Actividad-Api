import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteService } from '../services/transporte';

@Component({
  selector: 'app-f1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './f1.html',
  styleUrl: './f1.css'
})
export class F1Component implements OnInit {
  
  constructor(private servicio: TransporteService) { }

  public telemetria: any[] = [];
  public cargando: boolean = true;

  ngOnInit(): void {
    this.servicio.obtenerTelemetriaF1(55, 9159).subscribe({
      next: (data: any[]) => {
        this.telemetria = data;
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al consultar la API de OpenF1:', err);
        this.cargando = false;
      }
    });
  }
}