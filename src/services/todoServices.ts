import { Task } from "../protocols/task.js"
import todoRepository from "../repositories/todoRepository.js"

async function getAll(){
    try {
        const todosResult = await todoRepository.getAll()
        return todosResult.rows
    } catch (error) {
        console.log(error)
    }
}

async function create({description, title}: Task){
    try {
        await todoRepository.create({description, title})
    } catch (error) {
        console.log(error)
    }
}

async function done(id: number){
    try {
        await todoRepository.done(id)
    } catch (error) {
        console.log(error)
    }
}
async function undone(id: number){
    try {
        await todoRepository.undone(id)
    } catch (error) {
        console.log(error)
    }
}

async function remove(id: number){
    try {
        await todoRepository.remove(id)
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAll,
    create,
    done,
    undone,
    remove
}