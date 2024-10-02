import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { MovieService } from './services/movie/movie-service';
import { Movie } from './models/movie.model';
import { Observable } from 'rxjs';
import { AsyncPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, FeaturedMoviesComponent, AsyncPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'asif_mdb';
  movieData$!: Observable<Movie>;

  constructor(private movieService: MovieService) {};
}
