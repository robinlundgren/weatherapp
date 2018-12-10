export class Main {
    temp: number;
}

export class Name {
    name: string;
}

export class Weather {
    description: string;
}

export class Wind {
    speed: number;
    deg: number;
}

export class Sys {
    sunrise: number;
    sunset: number;
}

export class Clouds {
    all: number;
}

export class PipeScheme {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    sys: Sys;
    dt_txt: string;
}
