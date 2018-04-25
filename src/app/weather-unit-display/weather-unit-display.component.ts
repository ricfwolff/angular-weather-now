import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-unit-display',
  templateUrl: './weather-unit-display.component.html',
  styleUrls: ['./weather-unit-display.component.css']
})
export class WeatherUnitDisplayComponent implements OnInit {

  @Input() displayText : string;
  @Input() unit : string;
  @Input() value : string;

  constructor() { }

  ngOnInit() {
  }

}
