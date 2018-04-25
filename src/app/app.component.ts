import { Component } from '@angular/core';
import {City} from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather now';

  cities:  City[] = [
    {
      name: 'Nairobi',
      country: 'KE',
      temperature: 26,
      humidity: 90,
      pressure: 892,
      updatedAt: new Date(),
      hasError: false,
      loading: true,
      selected: false
    },
    {
      name: 'Urubici',
      country: 'BR',
      temperature: 15,
      humidity: 90,
      pressure: 892,
      updatedAt: new Date(),
      hasError: false,
      loading: false,
      selected: false
    },
    {
      name: 'Nuuk',
      country: 'GL',
      temperature: -5,
      humidity: 90,
      pressure: 892,
      hasError: true,
      loading: false,
      selected: false
    }
  ];
}
