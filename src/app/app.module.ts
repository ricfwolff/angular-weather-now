import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { WeatherUnitDisplayComponent } from './weather-unit-display/weather-unit-display.component';
import { ApiService } from './api.service';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CityWeatherCardComponent,
    WeatherUnitDisplayComponent,
    CityWeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [HttpClientModule, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
