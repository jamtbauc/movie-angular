import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: Movie[] = [];
  movie = new Movie(this.getNextId(), "", false);

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {

  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(data => this.movies = data.sort((a,b) => a.id - b.id));
  }
  getNextId(): number {
    return this.movieService.getNextId();
  }

  onSubmit(): void {
    this.movieService.addMovie(this.movie).subscribe();

    this.getMovies();

    this.router.navigate(['/fetch-movies']);
  }

}
