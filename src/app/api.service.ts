import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { debug } from 'util';


class CacheItem<T> {
  url: string;
  timestampCached: number;
  data: T;
}


@Injectable()
export class ApiService {
  cache: CacheItem<any>[] = [];


  constructor(private http: HttpClient) { }

  getWeather(cityName: string, country: string) {
    var query = "http://api.openweathermap.org/data/2.5/weather?q="
      + cityName + "," + country
      + "&appid=5408cad6cb5abc90bd58ac687b91f410"
      + "&units=metric";

    return this.getWithCache(query, 600000);
  }


  getWithCache<T>(url: string, cacheTime?: number, forceRefresh: boolean = false)
    : Observable<T> {
    let cachedItem: CacheItem<T> = this.getCachedItem<T>(url);

    if (cachedItem != undefined && !forceRefresh) {
      console.log("found cached item")
      let expireDate = cachedItem.timestampCached + cacheTime;
      if (Date.now() < expireDate) {
        console.log("cached item is valid");
        return of(cachedItem.data);
      }
    }

    console.log("couldn't find cached item");
    return this.http.get<T>(url).pipe(
      map(data => {
        (data as any).updatedAt = new Date();
        if (cacheTime) { // if we actually want to cache the result
          if (cachedItem == undefined) {
            cachedItem = new CacheItem();
          }
          cachedItem.data = data;
          cachedItem.timestampCached = Date.now();
          cachedItem.url = url;
          this.cache.push(cachedItem);
        }
        return data;
      })
    );
  }

  private getCachedItem<T>(url: string): CacheItem<T> {
    return this.cache.find(item => item.url == url);
  }


}
