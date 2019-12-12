import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posting } from './models/Posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPostings(page = 1): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posting?page=' + page);
  }
}