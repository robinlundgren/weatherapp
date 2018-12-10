// Exporterar API:s baslänk och ett specifikt ID 
// för att komma åt data från API:t
export enum OpenWeatherApi {
    baseUrl = 'https://api.openweathermap.org/data/2.5/',
    appId = 'e57fa8f98f9a17891ba5b109488a36c0' // nyckel genererad från openweathermap.org
}

//Exporterar ändpunkterna från API:t
export enum APIType {
    weather = 'weather?q=',
    forecast = 'forecast?q=',
}
