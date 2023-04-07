import { Router, Request, Response } from "express";
import todoControllers from "../controllers/todoControllers.js"

const routes = Router()

routes.get("/todo", todoControllers.getTodos)
routes.post("/todo", todoControllers.create)
routes.put("/todo/done/:id", todoControllers.done)
routes.put("/todo/undone/:id", todoControllers.undone)
routes.delete("/todo/:id", todoControllers.remove)

export default routes