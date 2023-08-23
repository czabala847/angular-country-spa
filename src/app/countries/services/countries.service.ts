import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchByCapital(term: string): Observable<Country[]> {
    const URL_FETCH = `${this.BASE_URL}/capital/${term}`;
    return this.http.get<Country[]>(URL_FETCH);
  }
}
