import Header from "@/components/molecules/Header/Header"
import UserProfileProvider from "@/features/userProfile/UserProfileProvider"
import useUserProfile from "@/features/userProfile/useUserProfile"
import { Auth } from "@/utils/auth"
import { UserProfile } from "@/utils/types"
import { Stack, usePathname, useRouter } from "expo-router"
import { FC, useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"

const PrivateLayout: FC = () => {
  const burgerIcon = require("@/assets/images/burger.svg")
  const crossIcon = require("@/assets/images/cross.svg")
  const [isLoaded, setIsLoaded] = useState(false)
  const { navigate, back, push } = useRouter()
  const pathname = usePathname()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    ;(async function () {
      const isAuth = await Auth.isAuth()
      if (!isAuth) {
        navigate("/signin")
      } else {
        setUserProfile(await Auth.getUserProfile())
        setIsLoaded(true)
      }
    })()
  }, [])

  if (!isLoaded || !userProfile) {
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

  const openModal = () => {
    push({
      pathname: "/navigationmodal",
      params: {
        prevPathname: pathname,
        activePathname: pathname,
      },
    })
  }

  return (
    <UserProfileProvider userProfile={userProfile}>
      <Stack
        screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => {
              const { first_name } = useUserProfile()
              return (
                <Header
                  title={`Hi, ${first_name}`}
                  leftIcon={{
                    source: burgerIcon,
                    onPress: openModal,
                  }}
                />
              )
            },
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
    </UserProfileProvider>
  )
}

export default PrivateLayout
