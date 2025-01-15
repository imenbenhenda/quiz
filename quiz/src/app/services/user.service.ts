import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:5000/api/users';  // Assurez-vous que cette URL est correcte

  constructor(private http: HttpClient) {}

  // Méthode d'inscription
  register(username: string, password: string): Observable<any> {
    // Utilisation correcte des backticks pour l'URL
    return this.http.post(`${this.baseUrl}/register`, { username, password });
  }

  // Méthode de connexion
  login(username: string, password: string): Observable<any> {
    // Utilisation correcte des backticks pour l'URL
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }
}

