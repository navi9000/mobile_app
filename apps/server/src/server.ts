import express from "express"
import cors from "cors"
import auth from "./routes/auth"
import chats from "./routes/chats"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", auth)
app.use("/chats", chats)

export default app
