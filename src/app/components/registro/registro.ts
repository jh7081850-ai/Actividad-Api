import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class RegistroComponent {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  obtenerRutas(): Observable<any[]> {
       
    const rutasDePrueba = [
      { origen: 'CDMX', destino: 'Pachuca, Hidalgo', tipo_servicio: 'Ejecutivo', horario: '14:30 PM', precio: 180 },
      { origen: 'Edo. de México', destino: 'Querétaro', tipo_servicio: 'Directo', horario: '16:00 PM', precio: 350 }
    ];
    return of(rutasDePrueba);
  }

  registrarVenta(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/ventas`, datos);
  }
}