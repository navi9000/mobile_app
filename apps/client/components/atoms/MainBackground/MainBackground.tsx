import { FC, PropsWithChildren } from "react"
import { ImageBackground, StyleProp, StyleSheet, ViewStyle } from "react-native"

const styles = StyleSheet.create({
  img: {
    minWidth: 320,
    maxWidth: 750,
    flex: 1,
    overflow: "hidden",
  },
})

const MainBackground: FC<
  PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
> = ({ children }) => {
  const source = require("@/assets/images/main_background.svg")

  return (
    <ImageBackground source={source} resizeMode="cover" style={styles.img}>
      {children}
    </ImageBackground>
  )
}

export default MainBackground
