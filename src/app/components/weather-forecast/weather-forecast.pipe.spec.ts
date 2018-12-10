import { WeatherPipe } from "./weather-forecast.pipe";

let pipe: WeatherPipe

beforeEach(() => {
    pipe = new WeatherPipe();
});

describe('Pipe', () => {
    it('should create a pipe', () => {
        expect(pipe).toBeTruthy();
    });
});

describe('Pipe', () => {
    it('should contain array', () => {
        expect(pipe.transform([])).toEqual([]);
    });
});

describe('Array', () => {
    it('should contain values', () => {
        expect(pipe.transform([])).not.toBeNull();
    });
});