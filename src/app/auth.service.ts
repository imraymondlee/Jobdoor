import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.apiUrl + '/register', user);
  }

  loginUser(user) {
    return this.http.post<any>(this.apiUrl + '/login', user);
  }

}
