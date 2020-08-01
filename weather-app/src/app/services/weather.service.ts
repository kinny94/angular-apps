import { WeatherData } from './../types';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = environment.config.api_key;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getweatherForDeafultCities$(cities: string[]): Observable<WeatherData[]> {
    let data: any[] = [];
    cities.forEach(city => {
      data = [...data, this.getWeatherForCity(city)];
    });

    return forkJoin(...data).pipe(
      map((results) => results)
    );

  }

  getWeatherForCity(city: string): Observable<WeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`;
    return this.httpClient.get(url).pipe(
      map((data: any) => {
        const cityData: WeatherData = {
          name: data.name,
          description: data.weather.description,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          max_temp: data.main.max_temp,
          min_temp: data.main.min_temp,
          pressure: data.main.pressure,
          weather: data.weather.main,
          current_temp: data.weather.temp,
        };
        return cityData;
      }),
    );
  }
}