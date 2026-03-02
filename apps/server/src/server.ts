import express, { Request, Response } from "express"
import cors from "cors"
import UserAccount from "./models/UserAccount"
import UserProfile from "./models/UserProfile"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/auth", async (req: Request, res: Response) => {
  const { email, password } = req.body

  const userAcc = await UserAccount.findOne({
    where: {
      email,
      password,
    },
  })
  console.log({ userAcc })

  if (!userAcc) {
    res.status(401).json({
      is_success: false,
      message: "Invalid email and/or password",
    })
    return
  }

  const userProfile = await UserProfile.findOne({
    where: {
      id: userAcc.dataValues.id,
    },
  })

  if (!userProfile) {
    res.status(404).json({
      is_success: false,
      message: "Unable to find user profile",
    })
    return
  }

  res.json({
    is_success: true,
    body: {
      profile: userProfile.dataValues,
    },
  })
})

export default app
