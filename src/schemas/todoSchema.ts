import joi from "joi"
import { Task } from "../protocols/task.js"

export const todoSchema:joi.ObjectSchema<Task> = joi.object({
    title: joi.string().required(),
    description: joi.string().required()
})