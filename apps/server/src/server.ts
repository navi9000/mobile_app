import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Everything is fine")
})

app.get("/user/:id", (req: Request, res: Response) => {
  const { id } = req.params
  res.send(`Ok ${id}`)
})

export default app
