import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import Typography from "@/components/atoms/Typography/Typography"
import Login from "@/components/pages/Login"
import type { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    position: "absolute",
    top: 60,
    left: -4,
  },
  img: {
    position: "absolute",
    top: 150,
    left: "50%",
    transform: "translate(-50%, 0) scale(0.5)",
    transformOrigin: "top center",
    zIndex: -1,
  },
})

const Signin: FC = () => {
  return (
    <MainBackground>
      <View style={styles.container}>
        <Typography
          color="white"
          size="xlheader"
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
        <Login />
      </View>
    </MainBackground>
  )
}

export default Signin
