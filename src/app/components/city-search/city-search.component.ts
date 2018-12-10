import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
  units: string = 'Metric';
  city = '';
  weather: any;


  constructor(
    private _httpClient: HttpService,

    private _dataService: DataService,

    private router: Router,

    private ActivatedRoute: ActivatedRoute
  ) {

  }

  // Följande funktion hämtar forecast och weather med hjälp av två olika funktioner.
  // getForecast för forecast och getWeather för weather.
  // city används som parameter för att kunna bestämma vilken
  // stads väder som ska visas. värdet för "city" sparas i setForecastData och setWeatherData.
  onSubmit() {

    let city = this.city;

    this._httpClient.getForecast(city, this.units)
      .subscribe(
        res => {
          this._dataService.setForecastData(res);
        },
      );

    this._httpClient.getWeather(city, this.units)
      .subscribe(
        res => {
          this._dataService.setWeatherData(res);
        },
      );

  }

  // Följande funktion används för att matcha inputvärdet
  // med en stad i databasen.
  onForm() {
    this._httpClient.getCity(this.city).subscribe((response: any) => {
      this.weather = response;
    })
  }

}
