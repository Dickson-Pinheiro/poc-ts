import { ErrorRequestHandler} from "express";

export const handleAplicationErrors: ErrorRequestHandler = (err, req, res, next)=> {
    console.log(err.name)
    switch (err.name){
        case "notFoundError":
            res.status(404).send(err.message)
            break;
        default:
            res.status(500).send(err.message)
            break;
    }
   
}