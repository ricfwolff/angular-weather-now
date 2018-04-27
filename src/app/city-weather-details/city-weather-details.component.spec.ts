import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { CityWeatherDetailsComponent } from './city-weather-details.component';
import { WeatherUnitDisplayComponent } from '../weather-unit-display/weather-unit-display.component';

describe('CityWeatherDetailsComponent', () => {
  let component: CityWeatherDetailsComponent;
  let fixture: ComponentFixture<CityWeatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CityWeatherDetailsComponent, WeatherUnitDisplayComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
