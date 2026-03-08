import NavigationTemplate from "@/components/templates/Navigation"
import useUserProfile from "@/features/userProfile/useUserProfile"
import { Auth } from "@/utils/auth"
import { NavigationItem } from "@/utils/types"
import { useRouter } from "expo-router"
import type { FC } from "react"
import type { ImageSourcePropType } from "react-native"

type Props = {
  source: ImageSourcePropType
  name: string
  visible: boolean
  close: () => void
}

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Profile",
    href: "/profile",
  },
]

const NavigationModal: FC<Props> = () => {
  const { navigate } = useRouter()
  const { first_name, last_name } = useUserProfile()

  const logout = async () => {
    await Auth.clear()
    navigate("/signin")
  }

  const source = require("@/assets/images/provided_avatar.png")

  return (
    <NavigationTemplate
      navigationItems={navigationItems}
      user={{ avatar: source, fullName: `${first_name} ${last_name}` }}
      logout={logout}
    />
  )
}

export default NavigationModal
