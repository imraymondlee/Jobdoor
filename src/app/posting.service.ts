import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Posting } from './models/Posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPostings(page = 1, position?: string, location?: string): Observable<any> {
    // Position search
    if(position && !location) {
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&position=' + position);
    // Location search
    } else if (location && !position) {
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&location=' + location);
    // Position and Location search
    } else if (location && position) {
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&position=' + position + '&location=' + location);
    // Not a search
    } else {
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page);
    }
  }

  getSinglePosting(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posting/single/' + id);
  }

  createPosting(posting: object): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/posting', posting);
  }

  getMyPostings(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posting/my-postings');
  }

  updatePosting(id: string, updatedPosting: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/posting/single/' + id, updatedPosting);
  }

  deletePosting(id: string): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/posting/' + id);
  }
}