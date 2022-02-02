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
            <ul>{forecast?.properties.periods.map(item => <li>{item.name}: {item.temperature}{item.temperatureUnit} {item.detailedForecast}</li>)}</ul>
            <h3></h3>
        </div>
    );
}