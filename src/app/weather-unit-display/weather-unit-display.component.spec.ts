import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUnitDisplayComponent } from './weather-unit-display.component';

describe('WeatherUnitDisplayComponent', () => {
  let component: WeatherUnitDisplayComponent;
  let fixture: ComponentFixture<WeatherUnitDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
