import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieHttpService {

  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  // Search for shows based on a query
  searchShows(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/shows?q=${query}`);
  }

  // Get show details by ID
  getShowById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shows/${id}`);
  }
}
