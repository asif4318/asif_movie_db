import { Component, Input, } from '@angular/core';
import { MovieFrameComponent } from '../movie-frame/movie-frame.component';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie/movie-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured-movies',
  standalone: true,
  imports: [MovieFrameComponent, AsyncPipe, JsonPipe],
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.css'
})

export class FeaturedMoviesComponent {
  featuredMovies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService){};

  ngOnInit(): void {
    this.featuredMovies$ = this.movieService.getFeaturedMovies();
  }
}
