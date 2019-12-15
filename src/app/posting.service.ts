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

  getPostings(page = 1, position?: string, location?: string): Observable<any> {
    // Position search
    if(position && !location) {
      console.log("Position search");
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&position=' + position);
    // Location search
    } else if (location && !position) {
      console.log("Location search");
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&location=' + location);
    // Position and Location search
    } else if (location && position) {
      console.log("Position and Location search");
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page + '&position=' + position + '&location=' + location);
    } else {
      // Not a search
      return this.http.get<any>(this.apiUrl + '/posting?page=' + page);
    }
  }

  getSinglePosting(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posting/single/' + id);
  }

  postJob(job: object): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/posting', job);
  }

  getMyPostings(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posting/my-postings');
  }

  updatePosting(id: string, data: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/posting/single/' + id, data);
  }
}