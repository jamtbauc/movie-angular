import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = ""

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.moviesUrl = baseUrl + 'api/movies';
  }

  /** GET: Fetch all movies from the API */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }
}
