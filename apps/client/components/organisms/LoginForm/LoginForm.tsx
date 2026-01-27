import Button from "@/components/atoms/Button/Button"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import FormInput from "@/components/molecules/FormInput/FormInput"
import { FC } from "react"
import { Pressable, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    position: "relative",
    height: 300,
    justifyContent: "flex-end",
  },
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
    justifyContent: "flex-end",
    width: "100%",
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
        <Container variant="form" style={styles.form}>
          <FormInput title="Username" />
          <FormInput title="Password" secureTextEntry />
        </Container>
        <Button style={styles.button}>
          <Typography color="white">Get Started</Typography>
        </Button>
      </Container>
      <View style={styles.text}>
        <Typography color="white">Not registered?</Typography>
        <Pressable>
          <Typography color="white" underlined>
            Create Account
          </Typography>
        </Pressable>
      </View>
    </Container>
  )
}

export default LoginForm
