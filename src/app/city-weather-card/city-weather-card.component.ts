import { Component, OnInit, Input } from '@angular/core';
import {City} from '../city';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css']
})
export class CityWeatherCardComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
