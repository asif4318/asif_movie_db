import { Component, Input } from '@angular/core';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-movie-frame',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://image.tmdb.org/t/p/w1280/'),
  ],
  templateUrl: './movie-frame.component.html',
  styleUrl: './movie-frame.component.css'
})

export class MovieFrameComponent {
  @Input() posterPath = "";
  @Input() movieTitle = "Movie Title";
}
