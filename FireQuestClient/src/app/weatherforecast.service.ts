import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export type WeekDay = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface DateOnly {
  year: number;
  month: number;
  day: number;
  dayOfWeek: WeekDay;
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
  private weekDays: WeekDay[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<WeatherForecast[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(forecasts => forecasts.map(forecast => ({
        ...forecast,
        date: this.parseDateOnly(forecast.date)
      })))
    );
  }

  private parseDateOnly(dateString: string): DateOnly {
    const date = new Date(dateString);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1, // getMonth() returns 0-11
      day: date.getDate(),
      dayOfWeek: this.weekDays[date.getDay()],
      dayOfYear: this.getDayOfYear(date),
      dayNumber: Math.floor(date.getTime() / (24 * 60 * 60 * 1000))
    };
  }

  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
}