import { Stack } from "expo-router"
import { FC } from "react"

const PrivateLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default PrivateLayout
