import connection from "../database/connection.js"
import { Task } from "../protocols/task.js"

async function getAll(){
    return await connection.query(`
        SELECT * FROM tasks;
    `)
}

async function create({title, description}: Task){
    await connection.query(`
    insert into tasks (title, description) values ($1, $2);
    `, [title, description])
}

export default {
    getAll,
    create
}