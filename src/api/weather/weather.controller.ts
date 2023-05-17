import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";
import { WeatherService } from "./weather.service";

export class WeatherController extends BaseController{

    weatherService: WeatherService;

    constructor(){
        super();
        this.weatherService = new WeatherService();
    }

    async searchWeather(req: Request, res: Response){
        try{
            const {cities} = req.body;
            const doc = await this.weatherService.searchWeather({cities});
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getWeatherHistory(req: Request, res: Response){
        try{
            const doc = await this.weatherService.getWeatherHistory();
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }
}