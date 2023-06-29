import express, { Router } from "express";
import weatherRoutes from "../api/weather/weather.routes";

const rootRouter: Router = express.Router();
rootRouter.use('/api', weatherRoutes);

export default rootRouter;