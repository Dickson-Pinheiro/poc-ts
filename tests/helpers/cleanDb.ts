import prisma from '../../src/database/connection.js'

export async function cleanDb(){
    await prisma.tasks.deleteMany({});
}