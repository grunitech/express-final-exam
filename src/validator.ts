import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    let weight:number
    let weightUnit:number
    let height:number
    let heightUnit :number
    if (req.method === "POST"){
        weight = Number(req.body.weight)
         weightUnit = Number(req.body.weightUnit)
         height = Number(req.body.height)
         heightUnit = Number(req.body.heightUnit)
    }
    else if (req.method === "GET"){
         weight = Number(req.query.weight)
         weightUnit = Number(req.query.weightUnit)
         height = Number(req.query.height)
         heightUnit = Number(req.query.heightUnit)
    }else {
        throw new Error ("Not supported method")
    }
    if (! (weight && weightUnit && height && heightUnit)){
        throw new Error ("Youre missing a param")
    }

    next();
}
