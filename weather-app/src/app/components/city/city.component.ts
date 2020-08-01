import { WeatherData } from './../../types';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city$: Observable<string>;
  cityWeatherData$: Observable<WeatherData>;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
  ) {
    this.city$ = this.route.paramMap.pipe(
      map((params) => params.get('city')),
    );
  }

  ngOnInit(): void {
    this.cityWeatherData$ = this.city$.pipe(
      switchMap((city: string) => {
        return this.weatherService.getWeatherForCity(city)
      }),
    ); 
  }

}
