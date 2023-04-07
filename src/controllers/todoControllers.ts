import { Request, Response } from "express";
import todoServices from "../services/todoServices.js";
import { Task } from "../protocols/task.js";

async function getTodos(req: Request, res: Response){
    try {
        const todos = await todoServices.getAll()
        res.send(todos)   
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

async function create(req: Request, res: Response){
    const {title, description} = req.body as Task
    try {
        await todoServices.create({title, description})
        res.status(201).send()
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

async function done(req: Request, res: Response){
    const {id} = req.params
    try {
        await todoServices.done(Number(id))
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

async function undone(req: Request, res: Response){
    const {id} = req.params
    try {
        await todoServices.undone(Number(id))
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

async function remove(req: Request, res: Response){
    const {id} = req.params
    try {
        await todoServices.remove(Number(id))
        res.status(203).send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export default {
    getTodos,
    create,
    done,
    undone,
    remove
}