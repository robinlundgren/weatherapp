import { HttpService } from './http.service';

let service: HttpService

it('should create service', () => {
  expect(service).toBeTruthy();
});

describe('setWeatherData', () => {
  it('should contain list', () => {
    expect(service).toContain('list');
  })
});