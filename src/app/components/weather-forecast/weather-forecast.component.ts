import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PipeScheme } from '../apilist/apilist';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  forecastData: any;
  forecast: PipeScheme[];
  weather: any;


  constructor(private _dataService: DataService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute) {

  }

  // funktionen hämtar ett lagrat strängvärde i forecastData och weatherData och subscribar på innehållet.
  ngOnInit() {
    this._dataService.forecastData.subscribe(data => {
      this.forecast = data;
    });

    this._dataService.weatherData.subscribe(data => {
      this.weather = data;
    });

  }

  // routar tillbaka till sökvyn
  goBack() {
    this.router.navigate(['/']);
  }

}