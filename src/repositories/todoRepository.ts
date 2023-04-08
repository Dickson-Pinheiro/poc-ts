import { QueryResult } from "pg"
import connection from "../database/connection.js"
import { Task, TaskEntity } from "../protocols/task.js"
import { serverError } from "../errors/internalServerError.js"

async function getAll(): Promise<QueryResult<TaskEntity>>{
    try {
        return await connection.query(`
        SELECT * FROM tasks;
    `)
    } catch (error) {
        throw serverError()
    }
   
}

async function create({title, description}: Task){
    try {
        await connection.query(`
        insert into tasks (title, description) values ($1, $2);
        `, [title, description])   
    } catch (error) {
        throw serverError()
    }
}

async function done(id: number){
    try {
        await connection.query(`
        update tasks set done=$1 where id=$2;
    `, [true, id])    
    } catch (error) {
        throw serverError()
    }
    
}

async function undone(id: number){
    try {
        await connection.query(`
        update tasks set done=$1 where id=$2;
        `, [false, id])    
    } catch (error) {
        throw serverError()
    }
    
}

async function remove(id: number){
    try {
        await connection.query(`
        DELETE FROM tasks where id=$1
        `, [id])   
    } catch (error) {
        throw serverError()
    }
}

async function getOne(id: number): Promise<QueryResult<TaskEntity>>{
    try {
        return await connection.query(`
        SELECT * FROM tasks where id = $1;
       `, [id])
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