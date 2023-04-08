import { notFoundError } from "../errors/notFoundError.js"
import { serverError } from "../errors/internalServerError.js"
import { Task } from "../protocols/task.js"
import todoRepository from "../repositories/todoRepository.js"

async function getAll(){
    try {
        const todosResult = await todoRepository.getAll()
        return todosResult.rows
    } catch (error) {
        throw error
    }
}

async function create({description, title}: Task){
    try {
        await todoRepository.create({description, title})
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function done(id: number){
    try {
        const {rowCount} = await todoRepository.getOne(id)
        if(!rowCount) throw notFoundError()
        await todoRepository.done(id)  
    } catch (error) {
        throw error
    }
     
}

async function undone(id: number){
    try {
        const {rowCount} = await todoRepository.getOne(id)
        if(!rowCount) throw notFoundError()
        await todoRepository.undone(id)    
    } catch (error) {
        throw error
    }    
}

async function remove(id: number){
    try {
        const {rowCount} = await todoRepository.getOne(id)
    if(!rowCount) throw notFoundError()
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