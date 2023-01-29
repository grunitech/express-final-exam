import express,{Request,Response} from 'express';
import bmi, { BmiInput } from './bmi';
import validator from './validator';

const app = express();

const port = 3001; 
app.use(validator)

app.post('/bmi', (req: Request,res: Response)=>{
    const inputToCalc = req.body;
    res.send(bmi(inputToCalc));
});


app.get('/bmi', (req: Request,res: Response)=>{
    const data = req.params;
    console.log(data)
});

app.listen(port,()=>{
    console.log(`app is listening on port:${port}`)
})

export default app;
