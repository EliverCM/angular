import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8000/'; // Reemplaza esto con la URL de tu API
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Agrega cualquier otra cabecera que necesites aquí
    }),
  };

  constructor(private http: HttpClient) {}

  createOwner(userData: any): Observable<any> {
    const token = localStorage.getItem('tokenUser'); // Asegúrate de reemplazar 'token' con la clave correcta

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }),
    };
    // Crea un objeto HttpHeaders y agrega el token al encabezado
    return this.http.post(this.apiUrl + 'Owner', userData, httpOptions);
  }
  createDriver(userData: any): Observable<any> {
    const token = localStorage.getItem('tokenUser'); // Asegúrate de reemplazar 'token' con la clave correcta

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(this.apiUrl + 'Driver', userData, httpOptions);
  }
  createVehicle(userData: any): Observable<any> {
    const token = localStorage.getItem('tokenUser'); // Asegúrate de reemplazar 'token' con la clave correcta

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.post(this.apiUrl + 'Vehicle', userData, httpOptions);
  }

  getOwner(): Observable<any> {
    return this.http.get(this.apiUrl + 'Owner', this.httpOptions);
  }
  getOwnerByID(id: Number): Observable<any> {
    return this.http.get(this.apiUrl + 'Owner/' + id, this.httpOptions);
  }
  getDriverByID(id: Number): Observable<any> {
    return this.http.get(this.apiUrl + 'Driver/' + id, this.httpOptions);
  }
  getDriver(): Observable<any> {
    return this.http.get(this.apiUrl + 'Driver', this.httpOptions);
  }
  getVehicle(): Observable<any> {
    return this.http.get(this.apiUrl + 'Vehicle', this.httpOptions);
  }
  getBrand(): Observable<any> {
    return this.http.get(this.apiUrl + 'Brands', this.httpOptions);
  }
  getCities(): Observable<any> {
    return this.http.get(this.apiUrl + 'Cities', this.httpOptions);
  }
  postAccount(username: any): Observable<any> {
    return this.http.post(this.apiUrl + 'Account', username, this.httpOptions);
  }
}
