import { Response, Request, NextFunction } from "express"
import joi from "joi"
import { conflictError } from "../errors/conflictError.js"

export function validateSchema(schema: joi.ObjectSchema<any>){
    return (req: Request, res: Response, next: NextFunction) => {

        const {error, value} = schema.validate(req.body)

        if(error){
            throw conflictError(error.details.map(e => e.message)[0])
        }
        
        req.body = {...value}
        next()
    }
}