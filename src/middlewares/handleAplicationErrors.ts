import { ErrorRequestHandler, Response} from "express";
import { ErrorResponse } from "../protocols/error.js";

type HandleError = {
    handleError(err: ErrorResponse, res: Response): Response
}

const acceptedErros = {
    notFoundError: (err: ErrorResponse, res: Response) => {
       return res.status(404).send(err.message)
    },

    conflictError: (err: ErrorResponse, res: Response) => {
        return res.status(422).send(err.message)
    },

    internalServerError: (err: ErrorResponse, res: Response) => {
        res.status(500).send(err.message)
    }
}


export const handleAplicationErrors: ErrorRequestHandler = (err: ErrorResponse, req, res, next)=> {
    const handleError: HandleError  = {
        handleError: acceptedErros[err.name]
    }
    return handleError.handleError(err, res)
}