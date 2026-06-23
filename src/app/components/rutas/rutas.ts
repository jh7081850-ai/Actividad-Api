import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteService } from '../../services/transporte'; 

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rutas.html', 
  styleUrl: './rutas.css'
})
export class RutasComponent implements OnInit {
  @Output() rutaSeleccionada = new EventEmitter<void>();
  
  private service = inject(TransporteService);
  listaDeViajes: any[] = [];

  ngOnInit(): void {
    this.service.obtenerRutas().subscribe({
      next: (data: any[]) => { 
        this.listaDeViajes = data; 
      },
      error: (err: any) => { 
        console.error('Error al conectar con la API:', err); 
      }
    });
  }

  seleccionar(): void {
    this.rutaSeleccionada.emit();
  }
}