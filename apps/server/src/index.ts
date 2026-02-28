import app from "./server"

const PORT_NUMBER = 3000

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`)
})
