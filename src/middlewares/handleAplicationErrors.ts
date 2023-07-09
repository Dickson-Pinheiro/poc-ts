import { ErrorRequestHandler, Response} from "express";
import { ErrorResponse } from "../protocols/error.js";

const acceptedErros = {
    notFoundError: (err: ErrorResponse, res: Response) => {
       return res.status(404).send(err.message)
    },

    conflictError: (err: ErrorResponse, res: Response) => {
        return res.status(422).send(err.message)
    },

    internalServerError: (err: ErrorResponse, res: Response) => {
        return res.status(500).send(err.message)
    }
}

export type ErrorNameOptions = keyof typeof acceptedErros

export const handleAplicationErrors: ErrorRequestHandler = (err: ErrorResponse, req, res, next)=> {
    try {
        const handleError = acceptedErros[err.name]
        return handleError(err, res)   
    } catch (error) {
        acceptedErros.internalServerError(err, res)
    }
}