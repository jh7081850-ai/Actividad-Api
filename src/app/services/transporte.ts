import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteService { 
  private apiURL = 'http://localhost:3000/api';
  private f1URL = 'https://api.openf1.org/v1/car_data';

  constructor(private http: HttpClient) { }


  obtenerRutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/rutas`);
  }

  
  registrarVenta(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/ventas`, datos);
  }

  
  obtenerTelemetriaF1(driverNumber: number, sessionKey: number): Observable<any[]> {
    const urlCompleta = `${this.f1URL}?driver_number=${driverNumber}&session_key=${sessionKey}&speed>=315`;
    return this.http.get<any[]>(urlCompleta);
  }
}