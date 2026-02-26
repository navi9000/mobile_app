import { FC } from "react"
import LoginForm from "../organisms/LoginForm/LoginForm"
import { Image, StyleSheet, View } from "react-native"
import Typography from "../atoms/Typography/Typography"
import { Link } from "expo-router"
import Container from "../atoms/Container/Container"

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginContainer: {
    backgroundColor: "#000",
    position: "relative",
    height: 300,
    justifyContent: "flex-end",
  },
  text: {
    flexDirection: "row",
    gap: "0.25em",
    justifyContent: "center",
    alignItems: "flex-end",
  },
})

const LoginPageTemplate: FC = () => {
  const speechBalloonSvg = require("@/assets/images/speech_balloon.svg")

  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Typography
          color="white"
          fontSize={100}
          letterSpacing={-5}
          bold
          shadow
          style={styles.title}
        >
          Chat
        </Typography>
        <Image source={speechBalloonSvg} style={styles.img} />
      </View>
      <Container variant="default" style={styles.loginContainer}>
        <LoginForm />
        <View style={styles.text}>
          <Typography color="white" fontSize={11}>
            Not registered?
          </Typography>
          <Link href="/signup">
            <Typography color="white" fontSize={11} underlined>
              Create Account
            </Typography>
          </Link>
        </View>
      </Container>
    </View>
  )
}

export default LoginPageTemplate
