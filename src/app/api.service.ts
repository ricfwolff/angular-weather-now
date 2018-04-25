import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(cityName: string, country: string) {
    var query = "http://api.openweathermap.org/data/2.5/weather?q=" 
      + cityName + "," + country
      + "&appid=5408cad6cb5abc90bd58ac687b91f410"
      + "&units=metric";
    
    return this.http.get(query);
  }

}
