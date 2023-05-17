import {AxiosResponse} from 'axios';
import WeatherApiService from "../../services/WeatherApiService";
import { CustomErrors } from "../../util/CustomErrors";
import { SearchWeatherDto } from "./dto/search-weather.dto";
import { WeatherDataDto } from './dto/weather-data-dto';
import { WeatherModel } from './weather.model';
import { WeatherDataInnerDto } from './dto/search-weather-data-inner.dto';

export class WeatherService{

    weatherModel: WeatherModel;

    constructor(){
        this.weatherModel = new WeatherModel();
    }

    async searchWeather(searchWeatherDto: SearchWeatherDto): Promise<WeatherDataDto>{
        const {cities} = searchWeatherDto;
        try{
            const citiesArray = cities.split(',').map((city) => (city.trim()));
            const weatherPromises = [];
            for(const city of citiesArray){
                const requestData = WeatherApiService.get(city);
                weatherPromises.push(requestData);
            }

            //if one request fails, fail all
            //if we want to go through all requests, even if some fail
            //Promise.allSettled
            const totalWeatherData = await Promise.all(weatherPromises);

            const formattedData: WeatherDataDto = this.formatData(totalWeatherData);
            return this.weatherModel.createWeatherData(formattedData);
        }catch(error: any){
            throw new CustomErrors(`Could not get or save data for one or more of the cities: ${cities}`, error.message, 500);
        }
    }

    getWeatherHistory(): Promise<Array<WeatherDataDto>>{
        return this.weatherModel.getWeatherHistory();
    }

    private formatData(remoteData: Array<AxiosResponse>): WeatherDataDto{
        const results: Array<WeatherDataInnerDto> = [];
        remoteData.forEach((cityResponse: AxiosResponse) => {
            const dataResponse = cityResponse.data;
            const { temperature, wind, description} = dataResponse;
            const pathArray = cityResponse.config.url?.split('/');
            const city = pathArray?.slice(-1)[0];
            const cityWeatherData: WeatherDataInnerDto = {
                    city,
                    temperature,
                    wind,
                    description    
            }
            results.push(cityWeatherData);
        })
        return {searchData: results};
    }
}