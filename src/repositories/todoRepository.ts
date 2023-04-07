import { QueryResult } from "pg"
import connection from "../database/connection.js"
import { Task, TaskEntity } from "../protocols/task.js"

async function getAll(): Promise<QueryResult<TaskEntity>>{
    return await connection.query(`
        SELECT * FROM tasks;
    `)
}

async function create({title, description}: Task){
    await connection.query(`
    insert into tasks (title, description) values ($1, $2);
    `, [title, description])
}

async function done(id: number){
    await connection.query(`
        update tasks set done=$1 where id=$2;
    `, [true, id])
}

async function undone(id: number){
    await connection.query(`
    update tasks set done=$1 where id=$2;
    `, [false, id])
}

async function remove(id: number){
    await connection.query(`
    DELETE FROM tasks where id=$1
    `, [id])
}

async function getOne(id: number): Promise<QueryResult<TaskEntity>>{
    return await connection.query(`
    SELECT * FROM tasks where id = $1;
   `, [id])
}

export default {
    getAll,
    create,
    done,
    undone,
    remove,
    getOne
}