import { FC, PropsWithChildren } from "react"
import { ImageBackground, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    minWidth: 320,
    maxWidth: 750,
    overflow: "hidden",
  },
})

const MainBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/main_background.svg")}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </View>
  )
}

export default MainBackground
