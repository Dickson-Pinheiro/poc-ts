import { notFoundError } from "../errors/notFoundError.js"
import { serverError } from "../errors/serverError.js"
import { Task } from "../protocols/task.js"
import todoRepository from "../repositories/todoRepository.js"

async function getAll(){
    try {
        const todosResult = await todoRepository.getAll()
        return todosResult.rows
    } catch (error) {
        console.log(error)
        throw serverError()
    }
}

async function create({description, title}: Task){
    try {
        await todoRepository.create({description, title})
    } catch (error) {
        console.log(error)
        throw serverError()
    }
}

async function done(id: number){
        const {rowCount} = await todoRepository.getOne(id)
        if(!rowCount) {
            throw notFoundError()
        }
        await todoRepository.done(id)
}
async function undone(id: number){
        const {rowCount} = await todoRepository.getOne(id)
        if(!rowCount) throw notFoundError()
        await todoRepository.undone(id)
   
}

async function remove(id: number){
        const {rowCount} = await todoRepository.getOne(id)
        if(!rowCount) throw notFoundError()
        await todoRepository.remove(id)
}

export default {
    getAll,
    create,
    done,
    undone,
    remove
}