import { Component, Input, } from '@angular/core';
import { MovieFrameComponent } from '../movie-frame/movie-frame.component';

@Component({
  selector: 'app-featured-movies',
  standalone: true,
  imports: [MovieFrameComponent],
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.css'
})

export class FeaturedMoviesComponent {
  @Input() topMovies: {title: string, posterImageURL: string}[] = []
}
