import { FC } from "react"
import { ImageProps, Modal, StyleSheet, View } from "react-native"
import { Link } from "expo-router"
import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import Typography from "@/components/atoms/Typography/Typography"
import LogoutButton from "../LogoutButton/LogoutButton"
import { Resolve } from "@/utils/types"
import Header from "@/components/molecules/Header/Header"

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
  close: () => void
}

const NavigationModal: FC<Resolve<Props>> = ({ source, name, close }) => {
  const crossIcon = require("@/assets/images/cross.svg")
  return (
    <Modal>
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
        <LogoutButton source={source} name={name} />
      </MainBackground>
    </Modal>
  )
}

export default NavigationModal
