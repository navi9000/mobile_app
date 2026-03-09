import app from "./server"
import { sequelize } from "./config/db.config"
import { uploadImage } from "./config/cloudinary.config"

const PORT_NUMBER = 3000

async function run() {
  try {
    await sequelize.authenticate()
    console.log("DB connection established")

    await sequelize.sync({
      force: false,
      alter: false,
      logging: false,
    })

    console.log("Models synchronized")
    // await uploadImage("../client/assets/images/provided_avatar.png", "shoes_v2")

    app.listen(PORT_NUMBER, () => {
      console.log(`Server is running on port ${PORT_NUMBER}`)
    })
  } catch (err) {
    console.error("Unable to connect to DB: ", err)
  }
}

run()
