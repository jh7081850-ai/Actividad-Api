import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html'
})
export class HomeComponent {
  @Output() irARutas = new EventEmitter<void>();
  buscar() { this.irARutas.emit(); }
}