import { Component } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather now';

  cities: City[] = [
    {
      name: 'Nuuk',
      country: 'GL',
      hasError: false,
      loading: true,
      selected: false
    },
    {
      name: 'Urubici',
      country: 'BR',
      hasError: false,
      loading: true,
      selected: false
    }, {
      name: 'Nairobi',
      country: 'KE',
      hasError: false,
      loading: true,
      selected: false
    }
  ];
}
