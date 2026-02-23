import { Stack, useRouter } from "expo-router"
import { FC, useEffect, useState } from "react"
import { Auth } from "@/utils/auth"
import { ActivityIndicator, View } from "react-native"

const AuthLayout: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { navigate } = useRouter()
  useEffect(() => {
    ;(async function () {
      const isAuth = await Auth.isAuth()
      if (isAuth) {
        navigate("/")
      } else {
        setIsLoaded(true)
      }
    })()
  }, [])

  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}>
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="signup" />
    </Stack>
  )
}

export default AuthLayout
