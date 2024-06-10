import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarworksInterfaces } from '../interfaces/starworks.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://swapi.dev/api/people'; 

  constructor(private http: HttpClient) {}

  getstarworks(): Observable<{ results: StarworksInterfaces[] }> {
    return this.http.get<{ results: StarworksInterfaces[] }>(this.apiUrl);
  }
}
