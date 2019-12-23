import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:4000/user';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register', user);
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', user);
  }

  loggedIn() {
    // Returns true/false depending if it exists
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
