import { Component, OnInit, Input } from '@angular/core';
import {City} from '../city';
import { ApiService } from '../api.service';
import { DecimalPipe } from '@angular/common';
import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';


@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {

  @Input() city: City;
  private alive: boolean; 
  private interval: number;

  constructor(private apiService : ApiService) {
    this.alive = true;
    this.interval = 600000;
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => this.loadCityData());
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
        this.city.updatedAt = (data as any).updatedAt;
      }, err => {
        this.city.hasError = true;
        this.city.loading = false;
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your TimerObservable off
  }
}
