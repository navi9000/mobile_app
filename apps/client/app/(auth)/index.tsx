import Typography from "@/components/atoms/Typography/Typography"
import type { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  title: {
    position: "absolute",
    top: 120,
    left: -8,
  },
  img: {
    position: "absolute",
    top: 270,
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: -1,
  },
})

const Signin: FC = () => {
  return (
    <View>
      <Typography
        color="white"
        size="xl-header"
        bold
        shadow
        style={styles.title}
      >
        Chat
      </Typography>
      <Image
        source={require("@/assets/images/speech_balloon.svg")}
        style={styles.img}
      />
    </View>
  )
}

export default Signin
