import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from 'src/app/Interfaces/movie';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  save(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
