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

export default {
    getAll,
    create
}