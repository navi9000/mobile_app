import { FC } from "react"
import LoginForm from "../organisms/LoginForm/LoginForm"
import MainBackground from "../atoms/MainBackground/MainBackground"
import { Image, StyleSheet } from "react-native"
import Typography from "../atoms/Typography/Typography"

const styles = StyleSheet.create({
  container: {
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

const Login: FC = () => {
  const speechBalloonSvg = require("@/assets/images/speech_balloon.svg")

  return (
    <MainBackground style={styles.container}>
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
      <LoginForm />
    </MainBackground>
  )
}

export default Login
