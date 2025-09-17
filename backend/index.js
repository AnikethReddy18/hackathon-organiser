import express, { urlencoded } from "express"
import cors from "cors"

import mainRouter from "./routes/mainRouter.js";

const app = express();
const PORT = process.env.PORT || 3000
app.use(urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => res.send("Hello World"))
app.use("/user", mainRouter.userRouter)
app.use("/problemStatement", mainRouter.problemStatementRouter)

app.listen(PORT, () => console.log("Listening at http://localhost:" + PORT))
