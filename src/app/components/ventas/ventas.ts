import { Component, inject } from '@angular/core';
import { TransporteService } from '../../services/transporte'; // Ruta real corregida

@Component({
  selector: 'app-ventas',
  standalone: true,
  templateUrl: './ventas.html', // Corregido el nombre de tu plantilla plana
  styleUrl: './ventas.css'
})
export class VentasComponent { // Tu clase se llama Ventas a secas
  private service = inject(TransporteService);

  pagar(): void {
    const ticket = { usuario_id: 1, ruta_id: 1, asiento: '05', total: 180.00 };
    
    this.service.registrarVenta(ticket).subscribe({
      next: (res: any) => { 
        alert('¡Compra guardada con éxito en PostgreSQL!'); 
      },
      error: (e: any) => { 
        console.error('Error al registrar la venta:', e); 
      }
    });
  }
}