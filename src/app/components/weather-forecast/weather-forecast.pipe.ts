import { Pipe, PipeTransform } from '@angular/core';
import { PipeScheme } from '../apilist/apilist';
@Pipe({ name: 'weatherPipes' })

// Pipen för att skriva ut forecast-data enligt instruktionerna
// Använder nuvarande datum men lägger till värden och sätter
// ett start och stoppvärde för att anpassa utefter angivna instruktioner. 

export class WeatherPipe implements PipeTransform {

    transform(forecasts: PipeScheme[]): any {

        let today = new Date();


        let start = new Date();

        start.setDate(today.getDate() + 1);

        start.setHours(5);



        let stop = new Date();

        stop.setDate(today.getDate() + 2);

        stop.setHours(8);


        return forecasts.filter((forecast: PipeScheme) => {

            let forecastDate = new Date(forecast.dt * 1000);

            return forecastDate > start && forecastDate < stop;
        });
    }


}


