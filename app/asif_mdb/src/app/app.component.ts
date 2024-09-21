import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { MovieService } from './services/movie/movie-service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, FeaturedMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  movieService = inject(MovieService);
  title = 'asif_mdb';
}
