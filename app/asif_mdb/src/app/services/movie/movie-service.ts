import { Injectable } from "@angular/core";
import { Movie } from "../../models/movie.model";

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    movies: Movie[] = [
        {
            id: 1,
            title: "But I'm A Cheerleader",
            posterImageURL: "zC3BaoHJsrIeqOg4eZolNszsTej.jpg"
        },
        {
            id: 2,
            title: "Toy Story",
            posterImageURL: "uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
        },
    ]

    getMovie(id: number): Movie | undefined {
        return this.movies.find(e => e.id === id);
    }

    getMovies(): Movie[] {
        return this.movies;
    }
}
