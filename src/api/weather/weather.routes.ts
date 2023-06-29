import express, { Request, Response, Router } from 'express';
import { searchWeatherValidator } from './weather.middleware';
import runValidation from '../../middleware/validators';
import { WeatherController } from './weather.controller';

const weatherRoutes: Router = express.Router();

const weatherController = new WeatherController();

weatherRoutes.post(
    '/searchWeather', 
    searchWeatherValidator, 
    runValidation,
    (req: Request, res: Response) => {weatherController.searchWeather(req, res)}
    );

weatherRoutes.get(
    '/getWeatherHistory',
    (req: Request, res: Response) => {weatherController.getWeatherHistory(req, res)}    
    );

export default weatherRoutes;