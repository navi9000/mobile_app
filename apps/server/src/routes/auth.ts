import { Router } from "express"
import { AuthenticateUserSchema, CreateUserSchema } from "../utils/validations"
import UserAccount from "../models/UserAccount"
import UserProfile from "../models/UserProfile"
import bcrypt from "bcrypt"

const router = Router()

router.post("/sign-up", async (req, res) => {
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

router.post("/sign-in", async (req, res) => {
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

export default router
