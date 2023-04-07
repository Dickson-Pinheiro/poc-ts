import { Request, Response } from "express";
import todoServices from "../services/todoServices.js";

async function getTodos(req: Request, res: Response){
    try {
        const todos = await todoServices.getAll()
        res.send(todos)   
    } catch (error) {
        console.log(error)
    }
}

export default {
    getTodos
}