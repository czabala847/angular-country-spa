import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountries(urlFetch: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(urlFetch)
      .pipe(catchError((error) => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const URL_FETCH = `${this.BASE_URL}/alpha/${code}`;
    return this.searchCountries(URL_FETCH).pipe(
      map((countries) => {
        if (countries.length === 0) return null;
        return countries[0];
      })
    );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const URL_FETCH = `${this.BASE_URL}/capital/${term}`;
    return this.searchCountries(URL_FETCH);
  }

  searchByRegion(term: string): Observable<Country[]> {
    const URL_FETCH = `${this.BASE_URL}/region/${term}`;
    return this.searchCountries(URL_FETCH);
  }

  searchByCountry(term: string): Observable<Country[]> {
    const URL_FETCH = `${this.BASE_URL}/name/${term}`;
    return this.searchCountries(URL_FETCH);
  }
}
