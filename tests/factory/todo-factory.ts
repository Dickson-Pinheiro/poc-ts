import {faker} from '@faker-js/faker'
import prisma from '../../src/database/connection.js'

export async function createTask(){
    return prisma.tasks.create({
        data: {
            title: faker.name.jobTitle(),
            description: faker.lorem.lines()
        }
    })
}