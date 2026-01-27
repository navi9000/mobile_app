import { FC, PropsWithChildren } from "react"
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native"

const styles = StyleSheet.create({
  img: {
    minWidth: 320,
    maxWidth: 750,
    width: "100%",
  },
  inlay: {
    width: "100%",
    overflow: "hidden",
  },
})

const MainBackground: FC<
  PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
> = ({ children, style }) => {
  const source = require("@/assets/images/main_background.svg")
  const { height } = useWindowDimensions()

  return (
    <ImageBackground source={source} resizeMode="cover" style={styles.img}>
      <View style={[styles.inlay, { height }, style]}>{children}</View>
    </ImageBackground>
  )
}

export default MainBackground
