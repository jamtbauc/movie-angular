import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from 'src/app/Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  movie = new Movie(this.getNextId(), "", false);

  constructor(
    private movieService: MovieService,
    private router: Router,
    private location: Location
  ) { }

  getNextId(): number {
    return this.movieService.getNextId();
  }

  onSubmit(): void {
    this.movieService.addMovie(this.movie).subscribe();

    this.router.navigate(['/fetch-movies']);
  }

  goBack(): void {
    this.location.back();
  }

}
