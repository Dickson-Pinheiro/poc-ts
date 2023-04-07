import todoRepository from "../repositories/todoRepository.js"

async function getAll(){
    try {
        const todosResult = await todoRepository.getAll()
        return todosResult.rows
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAll
}