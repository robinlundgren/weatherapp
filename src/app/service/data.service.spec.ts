import { DataService } from './data.service';
import { WeatherForecastComponent } from '../components/weather-forecast/weather-forecast.component';

let service: DataService
let test: WeatherForecastComponent

beforeEach(() => {
  service = new DataService();
});

it('should create service', () => {
  expect(service).toBeTruthy();
});

describe('setWeatherData', () => {
  it('should return something', () => {
    expect(service).toHaveBeenCalledWith(service);
  });
});