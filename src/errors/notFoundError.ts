import { ErrorResponse } from "../protocols/error.js"

export function notFoundError(): ErrorResponse{
    return {
        name: "notFoundError",
        message: "not result for this search."
    }
}