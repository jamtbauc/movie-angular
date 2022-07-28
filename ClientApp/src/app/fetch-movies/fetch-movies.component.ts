import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-fetch-movies',
  templateUrl: './fetch-movies.component.html',
  styleUrls: ['./fetch-movies.component.css']
})
export class FetchMoviesComponent {
  public movies: Movie[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie[]>(baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}

interface Movie {
  id: number;
  name: string;
  haveWatched: boolean;
}
