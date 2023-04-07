import { Router, Request, Response } from "express";
import todoControllers from "../controllers/todoControllers.js"

const routes = Router()

routes.get("/todo", todoControllers.getTodos)

export default routes