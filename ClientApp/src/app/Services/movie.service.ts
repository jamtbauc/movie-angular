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

  /** POST: Add new movie to the database */
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions);
  }

  /** PUT: Update movie using id */
  updateMovie(movie: Movie): Observable<any> {
    console.log(movie);
    return this.http.put(this.moviesUrl + "/" + movie.id, movie, this.httpOptions);
  }

  /** HELPER FUNCTIONS */
  getNextId(): number {
    return this.nextId++;
  }
}
