import { Component, Input } from '@angular/core';
import { AsyncPipe, JsonPipe} from '@angular/common';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie/movie-service';
import { TmdbMovieInfo } from '../../models/tmdb-movie-info.model';

@Component({
  selector: 'app-movie-frame',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  providers: [],
  templateUrl: './movie-frame.component.html',
  styleUrl: './movie-frame.component.css'
})

export class MovieFrameComponent {
  @Input() movieId!: number;
  @Input() movieTitle = "Movie Title";
  posterPath$!: Observable<TmdbMovieInfo>;
  posterPath = "https://image.tmdb.org/t/p/w1280"

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.posterPath$ = this.movieService.getImage(this.movieId);
    this.posterPath$.subscribe(req => this.posterPath += req.poster_path);
  }
}
