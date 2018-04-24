import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatDividerModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CityWeatherCardComponent
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
