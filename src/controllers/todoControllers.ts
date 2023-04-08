import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import todoServices from "../services/todoServices.js";
import { Task } from "../protocols/task.js";

async function getTodos( req: Request, res: Response, next: NextFunction){
    try {
        const todos = await todoServices.getAll()
        return res.send(todos)   
    } catch (error) {
        next(error)
    }
}

async function create(req: Request, res: Response, next: NextFunction){
    const {title, description} = req.body as Task
    try {
        await todoServices.create({title, description})
        return res.status(201).send()
    } catch (error) {
       next(error)
    }
}

async function done(req: Request, res: Response, next: NextFunction){
    const {id} = req.params
    try {
        await todoServices.done(Number(id))
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function undone(req: Request, res: Response, next: NextFunction){
    const {id} = req.params
    try {
        await todoServices.undone(Number(id))
        return res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}

async function remove(req: Request, res: Response, next: NextFunction){
    const {id} = req.params
    try {
        await todoServices.remove(Number(id))
        return res.status(203).send()
    } catch (error) {
        next(error)
    }
}

export default {
    getTodos,
    create,
    done,
    undone,
    remove
}