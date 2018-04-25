import { Component, OnInit, Input } from '@angular/core';
import {City} from '../city';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {

  @Input() city: City;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.loadCityData();
  }

  loadCityData() {
    this.city.loading = true;
    this.city.hasError = false;
    this.apiService
      .getWeather(this.city.name, this.city.country)
      .subscribe(data => {
        console.log(data);
        this.city.temperature = (data as any).main.temp;
        this.city.pressure = (data as any).main.pressure;
        this.city.humidity = (data as any).main.humidity;
        this.city.loading = false;
        this.city.updatedAt = new Date();
      }, err => this.city.hasError = true);
  }
}
