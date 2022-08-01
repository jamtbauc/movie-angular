import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = ""
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  public nextId = 5;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.moviesUrl = baseUrl + 'api/movies';
  }

  /** GET: Fetch all movies from the API */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  /** GET: Fetch a single movie by its ID */
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.moviesUrl + "/" + id);
  }

  /** PUT: Update movie using id */
  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl + "/" + movie.id, movie, this.httpOptions);
  }

  /** POST: Add new movie to the database */
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions);
  }

  /** DELETE: Delete selected movie from database */
  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(this.moviesUrl + "/" + movie.id, this.httpOptions);
  }

  /** HELPER FUNCTIONS */
  getNextId(): number {
    return this.nextId++;
  }
}
