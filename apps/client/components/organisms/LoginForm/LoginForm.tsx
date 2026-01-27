import Button from "@/components/atoms/Button/Button"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import FormInput from "@/components/molecules/FormInput/FormInput"
import { FC } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    position: "relative",
    height: 240,
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "absolute",
    bottom: 28,
    left: 0,
  },
  button: {
    backgroundColor: "#00a0ff",
    paddingInline: 40,
    paddingBlock: 20,
  },
  text: {
    flexDirection: "row",
    gap: "0.25em",
    justifyContent: "center",
  },
})

const LoginForm: FC = () => {
  return (
    <Container variant="default" style={styles.container}>
      <Container variant="default" style={styles.formContainer}>
        <Container variant="form">
          <FormInput title="Username" />
          <FormInput title="Password" secureTextEntry />
        </Container>
        <Button style={styles.button}>Get Started</Button>
      </Container>
      <View style={styles.text}>
        <Typography color="white">Not registered?</Typography>
        <Pressable>
          <Typography color="white">Create Account</Typography>
        </Pressable>
      </View>
    </Container>
  )
}

export default LoginForm
