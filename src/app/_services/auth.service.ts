// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { LoginResponse } from '../_models/user';
import { Router } from '@angular/router';
import { HttpIntercetor } from './http-intercetor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // API path
  basePath = 'https://dev.socrai.com/';
  options:HttpIntercetor;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  resp: LoginResponse;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
    
  };
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Verify user credentials on server to get token
  loginForm(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'api/login', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  saveUser(data: any): Observable<Object> {
    return this.http.post<LoginResponse>(this.basePath + 'api/register', data, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // After login save token and other values(if any) in localStorage
  setUser(respon:LoginResponse) {
    localStorage.setItem('name', respon.name);
    localStorage.setItem('access_token', respon.access_token);
    this.router.navigate(['/dashboard']);
  }

  // Checking if token is set
  isLoggedIn() {
    return localStorage.getItem('access_token') != null;
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/index']);
  }


  // Get data from server for Dashboard
  getData(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'api/ask/question', data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}