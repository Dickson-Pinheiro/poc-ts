import connection from "../database/connection.js"

async function getAll(){
    return await connection.query(`
        SELECT * FROM tasks;
    `)
}

export default {
    getAll
}