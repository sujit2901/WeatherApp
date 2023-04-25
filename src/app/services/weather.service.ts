import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.WeatherApiBaseBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHost)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKey),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
