import "express-async-errors"
import express from "express"
import routes from "./routes/routes.js"
import { handleAplicationErrors } from "./middlewares/handleAplicationErrors.js"

const app = express()
app.use(express.json())
app.use(routes)
app.use(handleAplicationErrors)

export {app}