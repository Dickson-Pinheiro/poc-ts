import { ErrorResponse } from "../protocols/error.js"

export function serverError(): ErrorResponse{
    return {
        name: "internalServerError",
        message: "try again later."
    }
}