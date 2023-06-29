import { WeatherDataDto } from "./dto/weather-data-dto";
import WeatherData from './schema/weather.schema';

export class WeatherModel{
    createWeatherData(weatherData: WeatherDataDto){
        return WeatherData.create(weatherData);
    }

    getWeatherHistory(){
        return WeatherData.find().sort('-createdAt').limit(10);
    }
}