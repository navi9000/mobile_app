import { FC, PropsWithChildren } from "react"
import {
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native"

const styles = StyleSheet.create({
  img: {
    minWidth: 320,
    maxWidth: 750,
  },
  inlay: {
    width: "100%",
  },
})

const MainBackground: FC<PropsWithChildren> = ({ children }) => {
  const source = require("@/assets/images/main_background.svg")
  const { height } = useWindowDimensions()

  return (
    <ImageBackground source={source} resizeMode="cover" style={styles.img}>
      <View style={[styles.inlay, { height }]}>{children}</View>
    </ImageBackground>
  )
}

export default MainBackground
