import { WeatherData } from './../../types';
import { Observable, combineLatest } from 'rxjs';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  defaultData$?: Observable<WeatherData[]>;
  dataSource$?: Observable<WeatherData[]>;
  filterControl = new FormControl();
  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    const filter$ = this.filterControl.valueChanges.pipe(
      startWith('')
    );

    const cities = ['san francisco', 'new york', 'tokyo', 'berlin', 'delhi', 'sydney', 'mumbai', 'paris', 'venice', 'miami', 'Toronto'];
    this.defaultData$ = this.weatherService.getweatherForDeafultCities$(cities);

    this.dataSource$ = combineLatest([this.defaultData$, filter$]).pipe(
      map(([datasource, filter]) => {
        return datasource.filter((cityWeatherData: WeatherData) => cityWeatherData.name.toLowerCase().includes(filter.toLowerCase()));
      }),
    );
  }

  getDataForCity(city: string) {
    
  }

}
