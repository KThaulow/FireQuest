import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DateOnly {
  year: number;
  month: number;
  day: number;
  dayOfWeek: number;
  dayOfYear?: number;
  dayNumber?: number;
}

export interface WeatherForecast {
  date: DateOnly;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {
  private apiUrl = 'http://localhost:5078/api/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<WeatherForecast[]> {
    let res = this.http.get<WeatherForecast[]>(this.apiUrl);
    return res;
  }
}