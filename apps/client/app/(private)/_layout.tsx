import Header from "@/components/molecules/Header/Header"
import NavigationModal from "@/components/organisms/NavigationModal/NavigationModal"
import { Auth } from "@/utils/auth"
import { Stack, useRouter } from "expo-router"
import { FC, useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"

const PrivateLayout: FC = () => {
  const burgerIcon = require("@/assets/images/burger.svg")
  const avatarIcon = require("@/assets/images/provided_avatar.png")
  const [isLoaded, setIsLoaded] = useState(false)
  const { navigate } = useRouter()
  const [username, setUsername] = useState<string | null>(null)
  const [navigationIsVisible, setNavigationIsVisible] = useState(false)

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
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => (
              <Header
                title={`Hi, ${username}`}
                leftIcon={{
                  source: burgerIcon,
                  onPress: () => setNavigationIsVisible(true),
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
                  onPress: () => setNavigationIsVisible(true),
                }}
              />
            ),
          }}
        />
      </Stack>
      <NavigationModal
        source={avatarIcon}
        name={username!}
        visible={navigationIsVisible}
        close={() => setNavigationIsVisible(false)}
      />
    </>
  )
}

export default PrivateLayout
