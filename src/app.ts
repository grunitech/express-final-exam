import express from 'express';
import bmi from "./bmi";
import validator from "./validator";
import {Request, Response} from "express"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser());

app.use(validator)

app.get('/bmi', (req: Request, res: Response) => {
    try {
        const weight = Number(req.query.weight)
        const weightUnit = Number(req.query.weightUnit)
        const height = Number(req.query.height)
        const heightUnit = Number(req.query.heightUnit)
        res.status(200).send(bmi({weight, weightUnit, height, heightUnit}))
    }
    catch(e){
        res.status(400).send(e)
    }
})

app.post('/bmi', (req: Request, res: Response) => {
    try {
        const weight = Number(req.body.weight)
        const weightUnit = Number(req.body.weightUnit)
        const height = Number(req.body.height)
        const heightUnit = Number(req.body.heightUnit)
        res.status(200).send(bmi({weight, weightUnit, height, heightUnit}))
    }
    catch(e){
        res.status(400).send(e)
    }

})

export default app;
