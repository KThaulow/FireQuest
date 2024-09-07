import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { WeatherforecastService } from './weatherforecast.service';

describe('WeatherforecastService', () => {
  let service: WeatherforecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherforecastService, // Provide the service you are testing
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(WeatherforecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
