import { Request, Response, NextFunction } from "express";
import {validationResult} from "express-validator";

const runValidation = (req: Request, res: Response, next: NextFunction) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            message: errors.array()[0].msg
        })
    }
    next();
}

export default runValidation;