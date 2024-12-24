import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService<T> {

  constructor(private httpClient: HttpClient) { }
  private readonly apiUrl = 'http://localhost:8080'

  get(endpoint: string): Observable<T> | undefined{
      return this.httpClient.get<T>(this.apiUrl+endpoint)
  }

}
