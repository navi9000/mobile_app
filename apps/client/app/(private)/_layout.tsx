import Header from "@/components/molecules/Header/Header"
import { Auth } from "@/utils/auth"
import { Stack, useRouter } from "expo-router"
import { FC, useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"

const PrivateLayout: FC = () => {
  const burgerIcon = require("@/assets/images/burger.svg")
  const [isLoaded, setIsLoaded] = useState(false)
  const { navigate } = useRouter()
  const [username, setUsername] = useState<string | null>(null)
  useEffect(() => {
    ;(async function () {
      const isAuth = await Auth.isAuth()
      if (!isAuth) {
        navigate("/signin")
      } else {
        setUsername(await Auth.getUsername())
        setIsLoaded(true)
      }
    })()
  }, [])

  if (!isLoaded) {
    return <ActivityIndicator />
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <Header
              title={`Hi, ${username}`}
              leftIcon={{ source: burgerIcon, onPress: () => {} }}
            />
          ),
        }}
      />
    </Stack>
  )
}

export default PrivateLayout
