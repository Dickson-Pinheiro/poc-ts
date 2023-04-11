import { QueryResult } from "pg"
import prisma from "../database/connection.js"
import { Task} from "../protocols/task.js"
import { serverError } from "../errors/internalServerError.js"

async function getAll(){
    try {
        return prisma.tasks.findMany()
    } catch (error) {
        throw serverError()
    }
   
}

async function create({title, description}: Task){
    try {
        await prisma.tasks.create({data: {title, description}})  
    } catch (error) {
        throw serverError()
    }
}

async function done(id: number){
    try {
        await prisma.tasks.update({where: {
            id
        },
        data: {
            done: true
        }
    },
        )  
    } catch (error) {
        throw serverError()
    }
    
}

async function undone(id: number){
    try {
        await prisma.tasks.update({where: {
            id
        },
        data: {
            done: false
        }
    },
        )
    } catch (error) {
        throw serverError()
    }
    
}

async function remove(id: number){
    try {
        await prisma.tasks.delete({
            where: {
            id
        }
    })
    } catch (error) {
        throw serverError()
    }
}

async function getOne(id: number){
    try {
        return await prisma.tasks.findUnique({where: {
            id
        }})
    } catch (error) {
        throw serverError()
    }
   
}

export default {
    getAll,
    create,
    done,
    undone,
    remove,
    getOne
}