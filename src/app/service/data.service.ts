import { BehaviorSubject } from 'rxjs';


// Denna servicen används för lagra en stads strängvärde i en "BehaviorSubject".
// Strängvärdet hämtas i en property som sätts i en observable.
export class DataService {

  private weatherSource = new BehaviorSubject({});
  private forecastSource = new BehaviorSubject([]);

  weatherData = this.weatherSource.asObservable();
  forecastData = this.forecastSource.asObservable();

  constructor() { }

  // Värden till "BehaviorSubject" fångas upp med följande funktioner
  setWeatherData(data: any) {

    this.weatherSource.next(data);
  }

  setForecastData(data: any) {

    this.forecastSource.next(data);
  }

}