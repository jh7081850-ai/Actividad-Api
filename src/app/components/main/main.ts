import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones de tus pantallas existentes
import { HomeComponent } from '../home/home';
import { RutasComponent } from '../rutas/rutas';
import { VentasComponent } from '../ventas/ventas';
import { F1Component } from '../../f1/f1';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HomeComponent, RutasComponent, VentasComponent, F1Component], 
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent {
  @Input() vistaActiva: string = 'home';
  @Output() vistaModificada = new EventEmitter<string>();

  cambiarVista(nuevaVista: string): void {
    this.vistaModificada.emit(nuevaVista);
  }
}