import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherforecastService, WeatherForecast } from '../weatherforecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [CommonModule] // Import CommonModule for ngIf, ngFor, etc.
})
export class WeatherComponent implements OnInit {
  weatherForecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherforecastService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForecast().subscribe({
      next: (data: WeatherForecast[]) => {
        this.weatherForecasts = data; 
      },
      error: (error: any) => {
        console.error('Error fetching weather forecast data', error);
      }
    });
  }
}