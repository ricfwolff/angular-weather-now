import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.css']
})
export class CityWeatherDetailsComponent implements OnInit {

  @Input() city: City;
  
  constructor() { }

  ngOnInit() {
  }

}
