import Button from "@/components/atoms/Button/Button"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import FormInput from "@/components/molecules/FormInput/FormInput"
import { useRouter } from "expo-router"
import { FC, useState } from "react"
import { Alert, Image, StyleSheet, Platform } from "react-native"
import { Auth } from "@/utils/auth"

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 48,
    left: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  button: {
    backgroundColor: "#00a0ff",
    paddingInline: 40,
    paddingBlock: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
})

const LoginForm: FC = () => {
  const playIcon = require("@/assets/images/play.svg")
  const { navigate } = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async () => {
    if (!username || !password) {
      return
    }
    try {
      const res = await fetch("http://localhost:3000/auth", {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      if (!res.ok) {
        const json = await res.json()
        Platform.OS === "web"
          ? alert(json.message)
          : Alert.alert("Error", json.message)
        return
      }
      const json = await res.json()
      if (json.is_success) {
        Auth.setAuth(json.body.profile.first_name).then(() => {
          navigate("/")
        })
      }
    } catch (e) {
      const message = "Something went wrong"
      Platform.OS === "web"
        ? alert(message)
        : Alert.alert("Error", "Something went wrong")
    }
  }

  return (
    <Container variant="default" style={styles.formContainer}>
      <Container variant="form" style={styles.form}>
        <FormInput title="Username" onChangeText={setUsername} />
        <FormInput
          title="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </Container>
      <Button style={styles.button} onPress={signUp}>
        <Image source={playIcon} />
        <Typography color="white" fontSize={13} bold>
          Get Started
        </Typography>
      </Button>
    </Container>
  )
}

export default LoginForm
