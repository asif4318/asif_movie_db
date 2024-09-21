import { Injectable } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    apiBaseURL = "http://127.0.0.1:3000/";

    constructor(private http: HttpClient) {

    }

    // Get highest grossing movies
    getFeaturedMovies(limit: number = 3): Observable<Movie[]> {
        // let requestURL = `${this.apiBaseURL}movies_metadata?select=id%3Amovie_id%2Ctitle%2Cposter_path&order=revenue.desc&limit=3`
        let requestURL = `${this.apiBaseURL}movies_metadata?select=id%3Amovie_id%2Ctitle%2Cposter_path&order=revenue.desc&limit=${limit}`
        return this.http.get<Movie[]>(requestURL);
    }
}
