import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherPipe } from './components/weather-forecast/weather-forecast.pipe';
import { AppRoutingModule } from './app-routing.module'

import { HttpService } from './service/http.service';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    WeatherForecastComponent,
    WeatherPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }