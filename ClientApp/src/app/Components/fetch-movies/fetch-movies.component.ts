import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-fetch-movies',
  templateUrl: './fetch-movies.component.html',
  styleUrls: ['./fetch-movies.component.css']
})
export class FetchMoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();  
  }

  getMovies() {
    this.movieService.getMovies().subscribe(data => this.movies = data.sort((a,b) => a.id - b.id));
  }

}
