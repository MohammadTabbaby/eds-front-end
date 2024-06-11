import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9002/api/auth';
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthenticated = true;
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}