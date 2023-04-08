import { Router } from "express";
import todoControllers from "../controllers/todoControllers.js"
import { validateSchema } from "../middlewares/validateSchema.js";
import { todoSchema } from "../schemas/todoSchema.js";
const routes = Router()

routes.get("/todo", todoControllers.getTodos)
routes.post("/todo", validateSchema(todoSchema), todoControllers.create)
routes.put("/todo/done/:id", todoControllers.done)
routes.put("/todo/undone/:id", todoControllers.undone)
routes.delete("/todo/:id", todoControllers.remove)

export default routes