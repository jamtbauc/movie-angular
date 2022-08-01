import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-movies',
  templateUrl: './fetch-movies.component.html',
  styleUrls: ['./fetch-movies.component.css']
})
export class FetchMoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMovies();  
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(data => this.movies = data.sort((a,b) => a.id - b.id));
  }

  updateWatched(m: Movie): void {
    this.movieService.updateMovie(m).subscribe();

    this.movies = this.movies.sort((a,b) => a.id - b.id);
  }

  deleteMovie(m: Movie): void {
    this.movieService.deleteMovie(m).subscribe();

    this.ngOnInit();
  }

}
