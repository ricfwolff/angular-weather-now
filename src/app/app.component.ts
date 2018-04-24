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
      temperature: 20,
      humidity: 90
    },
    {
      name: 'Urubici',
      country: 'BR',
      temperature: 15,
      humidity: 90
    },
    {
      name: 'Nuuk',
      country: 'GL',
      temperature: -5,
      humidity: 90
    }
  ];
}
