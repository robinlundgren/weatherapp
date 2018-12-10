import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  {
    path: '', component: CitySearchComponent
  },
  {
    path: 'detail', component: WeatherForecastComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }