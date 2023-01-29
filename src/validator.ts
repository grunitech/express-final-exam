import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    const height = req.body['height'];
    const weight = req.body['weight'];
    const heightUnit = req.body['heightUnit'];
    const weightUnit = req.body['weightUnit'];
    if (!height) return res.status(404).json({message: 'invalid height'})
    if (!heightUnit) return res.status(404).json({message: 'invalid height unit'})
    if (!weight) return res.status(404).json({message: 'invalid weight'})
    if (!weightUnit) return res.status(404).json({message: 'invalid weight unit'})
    next();
}
