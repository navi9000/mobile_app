import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Auth } from "@/utils/auth"
import { Resolve } from "@/utils/types"
import { useRouter } from "expo-router"
import { FC } from "react"
import { ImageProps, Pressable, StyleSheet } from "react-native"

type Props = {
  source: ImageProps["source"]
  name: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingBlock: "auto",
    justifyContent: "center",
    gap: 4,
  },
})

const LogoutButton: FC<Resolve<Props>> = ({ source, name }) => {
  const { navigate } = useRouter()

  const logout = async () => {
    await Auth.clear()
    navigate("/signin")
  }

  return (
    <Pressable style={styles.container} onPress={logout}>
      <Container variant="form" style={styles.textContainer}>
        <Typography color="white" size="large" bold>
          Logout
        </Typography>
        <Typography color="theme" size="tiny" bold>
          {name.toUpperCase()}
        </Typography>
      </Container>
      <Avatar source={source} size="md" />
    </Pressable>
  )
}

export default LogoutButton
