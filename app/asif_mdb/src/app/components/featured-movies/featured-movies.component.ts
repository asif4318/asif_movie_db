import { Component, Input, } from '@angular/core';
import { MovieFrameComponent } from '../movie-frame/movie-frame.component';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie/movie-service';
import { AsyncPipe } from '@angular/common';
import { elementAt, Observable } from 'rxjs';

@Component({
  selector: 'app-featured-movies',
  standalone: true,
  imports: [MovieFrameComponent, AsyncPipe],
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
