import { Request, Response } from "express";
import todoServices from "../services/todoServices.js";
import { Task } from "../protocols/task.js";

async function getTodos(req: Request, res: Response){
    try {
        const todos = await todoServices.getAll()
        res.send(todos)   
    } catch (error) {
        console.log(error)
    }
}

async function create(req: Request, res: Response){
    const {title, description} = req.body as Task
    try {
        await todoServices.create({title, description})
        res.status(201).send()
    } catch (error) {
        console.log(error)
    }
}

export default {
    getTodos,
    create
}