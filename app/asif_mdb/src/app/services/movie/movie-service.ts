import { Movie } from "../../models/movie.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from "../../models/api-service";
import { MovieDto } from "../../models/DTOs/movie-dto.model";
import { Inject, Injectable } from "@angular/core";
import { BASE_URL } from "../../app.config";
import { environment } from "../../../environments/environment";
import { TmdbMovieInfo } from "../../models/tmdb-movie-info.model";

@Injectable({
    providedIn: 'root'
})

export class MovieService extends ApiService<Movie, MovieDto> {
    constructor(@Inject(BASE_URL) baseURL:string, private http: HttpClient) {
        super(baseURL);
    }

    private urlBuilder(dto: MovieDto | undefined , limit: number = 1): string {
        let requestURL = `${this.apiBaseURL}movies_metadata?select=id%3Amovie_id%2Ctitle%2Cposter_path&limit=${limit}`;
        let filters = dto?.title ? `&title=fts(english).${dto.title}` : '';
        return requestURL + filters;
    }

    override get(dto: MovieDto): Observable<Movie> {
        let requestURL = this.urlBuilder(dto);
        let source = this.http.get<Movie>(requestURL);
        return source;
    }

    override getList(): Observable<Movie[]> {
        throw new Error("Method not implemented.");
    }

    // Gets movie poster from TMDB database using TMDB ID
    getImage(movieId: number): Observable<TmdbMovieInfo> {
        let url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
        let headers = new HttpHeaders().set('Authorization', `$Bearer ${environment.TMDB_API_HEADER}`);
        let request = this.http.get<TmdbMovieInfo>(url, {headers: headers});
        return request;
    }

    // Get highest grossing movies
    getFeaturedMovies(limit: number = 3): Observable<Movie[]> {
        let requestURL = this.urlBuilder(undefined, limit=5) + "&order=revenue.desc";
        return this.http.get<Movie[]>(requestURL);
    }
}