import Header from "@/components/molecules/Header/Header"
import { Auth } from "@/utils/auth"
import { Stack, usePathname, useRouter } from "expo-router"
import { FC, useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"

const PrivateLayout: FC = () => {
  const burgerIcon = require("@/assets/images/burger.svg")
  const crossIcon = require("@/assets/images/cross.svg")
  const [isLoaded, setIsLoaded] = useState(false)
  const { navigate, back, push } = useRouter()
  const [username, setUsername] = useState<string | null>(null)
  const pathname = usePathname()

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

  const openModal = () => {
    push({
      pathname: "/navigationmodal",
      params: {
        username,
        prevPathname: pathname,
        activePathname: pathname,
      },
    })
  }

  return (
    <>
      <Stack
        screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => (
              <Header
                title={`Hi, ${username}`}
                leftIcon={{
                  source: burgerIcon,
                  onPress: openModal,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            header: () => (
              <Header
                title="Profile"
                leftIcon={{
                  source: burgerIcon,
                  onPress: openModal,
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="navigationmodal"
          options={{
            presentation: "modal",
            header: () => (
              <Header
                title=""
                leftIcon={{ source: crossIcon, onPress: back }}
                transparent
              />
            ),
          }}
        />
      </Stack>
    </>
  )
}

export default PrivateLayout
