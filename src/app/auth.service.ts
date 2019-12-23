import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/user/register', user);
  }

  loginUser(user): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/user/login', user);
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
