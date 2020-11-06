import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }

  saveUser(data: any): Observable<Object> {
    return this.http.post<any>('https://dev.socrai.com/api/register', data);
  }
  loginUser(data: any): Observable<Object> {
    return this.http.post<any>('https://dev.socrai.com/api/login', data);
  }

  getUser(): Observable<any>{
    return this.http.get<any[]>('https://localhost:44326/api/webApi')
  }


}
