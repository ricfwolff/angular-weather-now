import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { AppComponent } from './app.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';
import { WeatherUnitDisplayComponent } from './weather-unit-display/weather-unit-display.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FlexLayoutModule, HttpClientModule],
      declarations: [
        AppComponent, CityWeatherCardComponent, CityWeatherDetailsComponent, WeatherUnitDisplayComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Weather now'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Weather now');
  }));
});
