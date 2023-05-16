import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Hello World!',
    })
})

app.post("/post", async (req: Request, res: Response): Promise<Response> => {
    console.log(req.headers);
    return res.status(200).send({
      message: "Hello World from post!",
    });
  });

const PORT = 3000;

try{
    app.listen(PORT, (): void => {
        console.log(`Connected at ${PORT}`);
    })
}catch(error){
    const message = error instanceof Error ? error.message : "Unknown error."
    console.log(message);
}