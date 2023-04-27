import supertest from 'supertest'
import {app} from '../src/app.js'
import { cleanDb } from './helpers/cleanDb.js'


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
})