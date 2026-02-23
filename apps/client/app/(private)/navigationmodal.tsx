import LogoutButton from "@/components/molecules/LogoutButton/LogoutButton"
import NavItem from "@/components/molecules/NavItem/NavItem"
import { Auth } from "@/utils/auth"
import { LinkProps, useLocalSearchParams, useRouter } from "expo-router"
import { FC } from "react"
import { ImageProps, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },
})

type Props = {
  source: ImageProps["source"]
  name: string
  visible: boolean
  close: () => void
}

type NavigationItem = {
  title: string
  href: LinkProps["href"]
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
  const { username } = useLocalSearchParams()

  const logout = async () => {
    await Auth.clear()
    navigate("/signin")
  }

  const source = require("@/assets/images/provided_avatar.png")
  const name = typeof username === "string" ? username : username[0]

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {navigationItems.map((item, index) => (
          <NavItem key={index} index={index} {...item} />
        ))}
      </View>
      <LogoutButton source={source} name={name} onPress={logout} />
    </View>
  )
}

export default NavigationModal
