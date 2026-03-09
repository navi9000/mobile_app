import { v2 as cloudinary } from "cloudinary"
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} from "./env"

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

export async function uploadImage(src: string, public_id: string) {
  try {
    const result = await cloudinary.uploader.upload(src, {
      public_id,
      folder: "users",
      overwrite: true,
    })
    console.log({ result })
  } catch (err) {
    console.error(err)
  }
}
