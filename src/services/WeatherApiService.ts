import { CustomErrors } from '../util/CustomErrors';
import http from '../util/HttpUtil';
import config from "../config";

const get = (city: string) => {
    try{
        return http.get(`${config.WEATHER_API_URL}/${city}`);
    }catch(error: any){
        throw new CustomErrors(`Could not get data for city ${city}`, error.message, 400);
    }
}

const WeatherApiService = {
    get
};

export default WeatherApiService;