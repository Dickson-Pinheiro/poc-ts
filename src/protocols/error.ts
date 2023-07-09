import { ErrorNameOptions } from "../middlewares/handleAplicationErrors.js"

export type ErrorResponse = {
    name: ErrorNameOptions,
    message: string
}