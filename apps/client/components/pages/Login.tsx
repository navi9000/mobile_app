import { FC } from "react"
import LoginForm from "../organisms/LoginForm/LoginForm"
import { Image, StyleSheet, View } from "react-native"
import Typography from "../atoms/Typography/Typography"

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  title: {
    left: -4,
    transform: "translateY(14px)",
  },
  img: {
    zIndex: -1,
    alignSelf: "center",
    transform: "translateY(-14px)",
  },
  brandContainer: {
    flex: 1,
    justifyContent: "center",
  },
})

const Login: FC = () => {
  const speechBalloonSvg = require("@/assets/images/speech_balloon.svg")

  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Typography
          color="white"
          size="xlheader"
          bold
          shadow
          style={styles.title}
        >
          Chat
        </Typography>
        <Image source={speechBalloonSvg} style={styles.img} />
      </View>
      <LoginForm />
    </View>
  )
}

export default Login
