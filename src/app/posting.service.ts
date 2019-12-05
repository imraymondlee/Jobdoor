import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posting } from './models/Posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  apiUrl = './assets/mock-jobs.json';

  constructor(private http: HttpClient) { }

  getPostings(): Observable<Posting[]> {
    return this.http.get<Posting[]>(this.apiUrl);
  }
}