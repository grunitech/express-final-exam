import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */

const isValidUrl = (urlString:Request)=> {
    
    try { 
        return Boolean(new URL(urlString.toString())); 
    }
    catch(e){ 
        return false; 
    }
}
export default function validator(req: Request, res: Response, next: NextFunction) {
    // TODO implement me
    if(isValidUrl(req)){
        
    }
    next();
}
