import express, { Request, Response } from 'express';
import { emitWarning } from 'process';
import bmi from './bmi';
import validator from './validator';

const app = express();



app.use(express.json())
app.use(validator)




app.get('/bmi/:height/:weight/:heightUnit/:weightUnit', (req: Request, res: Response) => {
    const height = +req.params.height; 
    const weight = +req.params.weight; 
    const heightUnit = +req.params.heightUnit; 
    const weightUnit = +req.params.weightUnit; 
    const reqBmi = bmi({height, heightUnit, weight, weightUnit});
    console.log(reqBmi);
    res.status(200).send(reqBmi);
});
app.post('/bmi',   (req: Request, res: Response) => {
    const height = +req.body['height'];
    const weight = +req.body['weight'];
    const heightUnit = +req.body['heightUnit'];
    const weightUnit = +req.body['weightUnit'];
    const reqBmi = bmi({height, heightUnit, weight, weightUnit})
    
    res.status(200).json(reqBmi)
    
});

export default app;
