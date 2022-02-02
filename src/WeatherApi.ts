import axios from 'axios';
import { WeatherForecast } from './WeatherForecast';

export function getWeatherForecast():Promise<WeatherForecast> {

    return axios.get<WeatherForecast>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data);
}