import supertest from 'supertest'
import {app} from '../src/app.js'
import { cleanDb } from './helpers/cleanDb.js'
import { faker } from '@faker-js/faker'
import { createTask } from './factory/todo-factory.js'


const api = supertest(app)

beforeAll(async () => {
    await cleanDb()
})

afterAll(async () => {
    await cleanDb()
})

afterEach(async () => {
    await cleanDb()
})

describe("POST /todo", () => {
    it("should respond with status 422 if type of description is diferent of string" , async () => {
        const response = await api.post("/todo").send({
            title: "arrumar a casa",
            description: 1,
        })

        expect(response.status).toBe(422)
    })

    it("should respond with status 422 if type of title is diferent of string" , async () => {
        const response = await api.post("/todo").send({
            title: 1,
            description: "uma descrição qualquer",
        })

        expect(response.status).toBe(422)
    })

    it("should respond with status 201 if body data its correct types" , async () => {
        const response = await api.post("/todo").send({
            title: faker.name.jobTitle(),
            description: faker.lorem.lines(),
        })

        expect(response.status).toBe(201)
    })
})

describe("GET /todo", () => {
    it("should respond with status 200 if exists or not tasks.", async () => {
        const todo = await createTask()
        const response = await api.get("/todo");

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            done: expect.any(Boolean)
        })]))
    })
})

describe("PUT /todo/done/:id", () => {
    it("should respond with status 404 if id is not exists", async () => {

        const response = await api.put("/todo/done/1");

        expect(response.status).toBe(404)
    })

    it("should respond with status 200 if id exists", async () => {
        const todo = await createTask()
        const response = await api.put(`/todo/done/${todo.id}`);

        expect(response.status).toBe(200)
        expect(response.body.done).toBe(true)
    })
})

describe("PUT /todo/undone/:id", () => {
    it("should respond with status 404 if id is not exists", async () => {

        const response = await api.put("/todo/undone/1");

        expect(response.status).toBe(404)
    })

    it("should respond with status 200 if id exists", async () => {
        const todo = await createTask()
        const response = await api.put(`/todo/undone/${todo.id}`);

        expect(response.status).toBe(200)
        expect(response.body.done).toBe(false)
    })
})

describe("DELETE /todo/remove/:id", () => {
    it("Should respond with status 404 if id is not exists", async () => {
        const response = await api.delete("/todo/1")

        expect(response.status).toBe(404)
    })

    it("Should respond with status 203 if id already exists", async () => {

        const todo = await createTask()

        const response = await api.delete(`/todo/${todo.id}`)

        expect(response.status).toBe(203)
    })
})