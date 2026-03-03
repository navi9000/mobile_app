import express, { Request, Response } from "express"
import cors from "cors"
import UserAccount from "./models/UserAccount"
import UserProfile from "./models/UserProfile"
import { CreateUserSchema, AuthenticateUserSchema } from "./utils/validations"
import bcrypt from "bcrypt"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/auth", async (req: Request, res: Response) => {
  const validatedFields = AuthenticateUserSchema.safeParse(req.body)
  if (!validatedFields.success) {
    res.status(400).json({
      is_success: false,
      message: validatedFields.error.issues.flatMap((err) => err.message),
    })
    return
  }

  const { email, password } = validatedFields.data

  const userAcc = await UserAccount.findOne({
    where: {
      email,
    },
  })

  if (!userAcc) {
    res.status(401).json({
      is_success: false,
      message: "Invalid email",
    })
    return
  }

  const hashedPassword = userAcc.dataValues.password
  if (!(await bcrypt.compare(password, hashedPassword))) {
    res.status(401).json({
      is_success: false,
      message: "Invalid password",
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

app.post("/users", async (req: Request, res: Response) => {
  try {
    const validatedFields = CreateUserSchema.safeParse(req.body)

    if (!validatedFields.success) {
      return res.status(400).json({
        is_success: false,
        message: validatedFields.error.issues.flatMap((err) => err.message),
      })
    }

    const { email, password, first_name, last_name } = validatedFields.data

    const userAccount = await UserAccount.create({
      email,
      password: await bcrypt.hash(password, 10),
    })

    const userProfile = await UserProfile.create({
      id: userAccount.dataValues.id,
      first_name,
      last_name,
    })

    res.json({
      is_success: true,
      data: {
        profile: userProfile.dataValues,
      },
    })
  } catch (err) {
    console.error({ err })
    if (err && typeof err === "object" && "name" in err) {
      const errorName = err.name
      if (errorName === "SequelizeValidationError") {
        res.status(400).json({
          is_success: false,
          message:
            "The following fields may not be empty: email, password, first_name, last_name",
        })
        return
      }
      if (errorName === "SequelizeUniqueConstraintError") {
        res.status(409).json({
          is_success: false,
          message: "Email already exists",
        })
        return
      }
    }

    res.status(400).json({
      is_success: false,
      message: "Unexpected error",
    })
  }
})

export default app
