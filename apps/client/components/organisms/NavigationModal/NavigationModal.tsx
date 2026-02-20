import { FC } from "react"
import { ImageProps, Modal, StyleSheet, View } from "react-native"
import { Link, useRouter } from "expo-router"
import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import Typography from "@/components/atoms/Typography/Typography"
import LogoutButton from "../../molecules/LogoutButton/LogoutButton"
import { Resolve } from "@/utils/types"
import Header from "@/components/molecules/Header/Header"
import Animated, { SlideInDown, SlideOutUp } from "react-native-reanimated"
import { Auth } from "@/utils/auth"

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
          <Link href="/">
            <Typography size="header" color="white">
              Home
            </Typography>
          </Link>
        </View>
        <LogoutButton source={source} name={name} onPress={logout} />
      </MainBackground>
    </Modal>
  )
}

export default NavigationModal
