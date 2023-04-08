import { ErrorResponse } from "../protocols/error.js"

export function conflictError(message: string): ErrorResponse {
    return {
        name: "conflictError",
        message
    }
}