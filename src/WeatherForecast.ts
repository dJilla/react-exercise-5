

export interface WeatherForecast {
    context: any[];
    type:string;
    geometry: {
        type:string;
        coordinates:number[];
    }
    properties: {
        updated:string;
        units:string;
        forecastGenerator:string;
        generatedAt:string;
        updateTime:string;
        validTimes:string;
        elevation: {
            unitCode:string;
            value:number;
        }
        periods: {
            name:string;
            temperature:number;
            temperatureUnit:string;
            icon:string;
            detailedForecast:string;
        }
    }
}