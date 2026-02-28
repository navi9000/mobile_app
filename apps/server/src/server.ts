import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const dummyUserAccount = {
  email: "test",
  password: "test",
}

const dummyUserProfile = {
  account_id: 0,
  first_name: "Andrea",
  last_name: "Johnson",
  location: "San Francisco",
  occupation: "Event Manager",
  user_photo: "assets/images/provided_avatar.png",
}

app.post("/auth", (req: Request, res: Response) => {
  const { email, password } = req.body

  if (
    email !== dummyUserAccount.email ||
    password !== dummyUserAccount.password
  ) {
    res.status(401).json({
      is_success: false,
      message: "Invalid email and/or password",
    })
    return
  }

  res.json({
    is_success: true,
    body: {
      profile: dummyUserProfile,
    },
  })
})

export default app
