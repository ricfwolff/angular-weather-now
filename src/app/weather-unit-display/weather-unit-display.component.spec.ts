import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { WeatherUnitDisplayComponent } from './weather-unit-display.component';

describe('WeatherUnitDisplayComponent', () => {
  let component: WeatherUnitDisplayComponent;
  let fixture: ComponentFixture<WeatherUnitDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ WeatherUnitDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherUnitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
