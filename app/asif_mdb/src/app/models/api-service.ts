import { HttpClient } from "@angular/common/http";
import { Type } from "@angular/compiler";
import { Directive, Injectable } from "@angular/core";
import { Observable } from "rxjs";

export abstract class ApiService<T, U> {
    protected apiBaseURL: string;

    constructor(baseURL: string) {
        this.apiBaseURL = baseURL;
    }

    abstract get(dto:U): Observable<T>;

    abstract getList(): Observable<T[]>;
}
