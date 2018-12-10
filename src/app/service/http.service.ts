import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OpenWeatherApi, APIType } from '../config/config';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {

  }

  // Hämtar väder på en specifik stad från databasen weather i API:t
  getWeather(city: string, units: string): Observable<any> {
    return this.http.get(
      OpenWeatherApi.baseUrl + APIType.weather + city +
      '&appid=' + OpenWeatherApi.appId +
      '&units=' + units
    )
  }

  // Hämtar forecast på en specifik stad från databasen forecast i API:t.
  // Hämtar list från databasen och kallar på funktionen en gång
  // för varje element i arrayen
  getForecast(city: string, units: string): Observable<any> {
    return this.http.get(
      OpenWeatherApi.baseUrl + APIType.forecast + city +
      '&appid=' + OpenWeatherApi.appId +
      '&units=' + units
    ).pipe(
      map(res => res['list']),
    )

  }

  // Hämtar en stad från databasen
  getCity(city: string): Observable<any> {
    return this.http.get(
      OpenWeatherApi.baseUrl + APIType.weather + city +
      '&appid=' + OpenWeatherApi.appId
    )
  }


}