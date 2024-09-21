import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, FeaturedMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'asif_mdb';
  // placeholder data
  movieData = [
    {
      title: "But I'm A Cheerleader",
      posterImageURL: "zC3BaoHJsrIeqOg4eZolNszsTej.jpg"
    },
    {
      title: "Toy Story",
      posterImageURL: "uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
    },
  ]
}
