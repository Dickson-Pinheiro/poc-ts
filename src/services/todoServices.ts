import { notFoundError } from "../errors/notFoundError.js"
import { Task } from "../protocols/task.js"
import todoRepository from "../repositories/todoRepository.js"

async function getAll(){
    try {
        const todos = await todoRepository.getAll()
        return todos
    } catch (error) {
        throw error
    }
}

async function create({description, title}: Task){
    try {
        await todoRepository.create({description, title})
    } catch (error) {
        throw error
    }
}

async function done(id: number){
    try {
        const todo = await todoRepository.getOne(id)
        if(!todo) throw notFoundError()
        const updatedTodo = await todoRepository.done(id)
        return updatedTodo  
    } catch (error) {
        throw error
    }
     
}

async function undone(id: number){
    try {
        const todo = await todoRepository.getOne(id)
        if(!todo) throw notFoundError()
        const updatedTodo = await todoRepository.undone(id)
        return updatedTodo    
    } catch (error) {
        throw error
    }    
}

async function remove(id: number){
    try {
        const todo = await todoRepository.getOne(id)
        if(!todo) throw notFoundError()
    await todoRepository.remove(id)
    } catch (error) {
        throw error
    }
    
}

export default {
    getAll,
    create,
    done,
    undone,
    remove
}