import { FC, PropsWithChildren } from "react"
import { ImageBackground, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    minWidth: 320,
    maxWidth: 750,
    top: 0,
    left: 0,
    justifyContent: "center",
  },
})

const MainBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/main_background.svg")}
      resizeMode="cover"
      style={styles.img}
    >
      {children}
    </ImageBackground>
  )
}

export default MainBackground
