import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})
export class HeaderComponent {
  @Input() vistaActual: string = 'home';
  @Output() vistaSeleccionada = new EventEmitter<string>();

  cambiarVista(destino: string): void {
    this.vistaSeleccionada.emit(destino);
  }
}