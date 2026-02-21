import { FC } from "react"
import { ImageProps, Modal, StyleSheet, View } from "react-native"
import { LinkProps, useRouter } from "expo-router"
import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import LogoutButton from "../../molecules/LogoutButton/LogoutButton"
import { Resolve } from "@/utils/types"
import Header from "@/components/molecules/Header/Header"
import { Auth } from "@/utils/auth"
import NavItem from "@/components/molecules/NavItem/NavItem"

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
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

const NavigationModal: FC<Resolve<Props>> = ({
  source,
  name,
  close,
  visible,
}) => {
  const crossIcon = require("@/assets/images/cross.svg")
  const { navigate } = useRouter()

  const logout = async () => {
    close()
    await Auth.clear()
    navigate("/signin")
  }
  return (
    <Modal animationType="slide" visible={visible}>
      <MainBackground style={styles.container}>
        <Header
          title=""
          leftIcon={{ source: crossIcon, onPress: close }}
          transparent
        />
        <View style={styles.list}>
          {navigationItems.map((item, index) => (
            <NavItem key={index} index={index} onPress={close} {...item} />
          ))}
        </View>
        <LogoutButton source={source} name={name} onPress={logout} />
      </MainBackground>
    </Modal>
  )
}

export default NavigationModal
