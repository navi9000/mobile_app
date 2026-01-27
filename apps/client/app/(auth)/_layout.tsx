import { Stack } from "expo-router"
import { FC } from "react"

const AuthLayout: FC = () => {
  return (
    <Stack>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" />
    </Stack>
  )
}

export default AuthLayout
