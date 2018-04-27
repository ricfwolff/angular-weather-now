import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { CityWeatherCardComponent } from './city-weather-card.component';
import { CityWeatherDetailsComponent } from '../city-weather-details/city-weather-details.component';
import { WeatherUnitDisplayComponent } from '../weather-unit-display/weather-unit-display.component';
import { ApiService } from '../api.service';

describe('CityWeatherCardComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CityWeatherCardComponent, CityWeatherDetailsComponent, WeatherUnitDisplayComponent],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
