import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Auth } from "@/utils/auth"
import { Resolve } from "@/utils/types"
import { useRouter } from "expo-router"
import { FC } from "react"
import {
  GestureResponderEvent,
  ImageProps,
  Pressable,
  StyleSheet,
} from "react-native"

type Props = {
  source: ImageProps["source"]
  name: string
  onPress?: (event: GestureResponderEvent) => void
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingBlock: 0,
    justifyContent: "center",
    gap: 4,
    height: 80,
  },
})

const LogoutButton: FC<Resolve<Props>> = ({ source, name, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
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
