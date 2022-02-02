import {useState, useEffect} from 'react';
import { WeatherForecast } from './WeatherForecast';
import { getWeatherForecast } from './WeatherApi';

export function WeatherResponse() {

    const [forecast, setForecast] = useState<WeatherForecast|null>(null);

    useEffect(() => {

        getWeatherForecast().then(data => setForecast(data));
    }, []);

    return (

        <div>
            <h1>Weather Forecast</h1>
            <h2>{forecast?.properties.periods}</h2>
        </div>
    );
}