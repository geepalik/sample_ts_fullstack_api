import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import dbLoader from "./db/dbConnection";
import config from "./config";
import rootRouter from './routes';

const app: Application = express();

app.use(cors({origin: config.CLIENT_URL}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', rootRouter);

const initApp = async () => {
    try{
        await dbLoader();
        app.listen(config.PORT, (): void => {
            console.log(`Connected at ${config.PORT}`);
        })
    }catch(error){
        throw error;
    }
}

initApp().catch((error) => {
    const message = error instanceof Error ? error.message : "Unknown error."
    console.log(message);
})