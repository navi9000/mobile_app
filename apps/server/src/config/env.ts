import { env } from "../utils/env"

export const DB_NAME = env("DB_NAME")
export const DB_USER = env("DB_USER")
export const DB_PASS = env("DB_PASS")
export const DB_HOST = env("DB_HOST")
export const DB_PORT = +env("DB_PORT")

export const CLOUDINARY_NAME = env("CLOUDINARY_NAME")
export const CLOUDINARY_API_KEY = env("CLOUDINARY_API_KEY")
export const CLOUDINARY_API_SECRET = env("CLOUDINARY_API_SECRET")
