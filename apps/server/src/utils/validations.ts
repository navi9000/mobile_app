import z from "zod"

export const CreateUserSchema = z.object({
  email: z.email({ error: "Incorrect email format" }).trim(),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 character long" })
    .trim(),
  first_name: z
    .string()
    .min(1, { error: "First name must be at least 1 character long" })
    .trim(),
  last_name: z
    .string()
    .min(1, { error: "First name must be at least 1 character long" })
    .trim(),
})

export const AuthenticateUserSchema = z.object({
  email: z.email({ error: "Incorrect email format" }).trim(),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 character long" })
    .trim(),
})
