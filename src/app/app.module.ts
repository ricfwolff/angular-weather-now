import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';

// import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatDividerModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { WeatherUnitDisplayComponent } from './weather-unit-display/weather-unit-display.component';


@NgModule({
  declarations: [
    AppComponent,
    CityWeatherCardComponent,
    WeatherUnitDisplayComponent
  ],
  imports: [
    BrowserModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatDividerModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
