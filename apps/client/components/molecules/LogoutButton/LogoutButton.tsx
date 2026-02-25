import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import type { Resolve } from "@/utils/types"
import type { FC } from "react"
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
  button: {
    flexDirection: "row",
  },
  container: {
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
    <Pressable style={styles.button} onPress={onPress}>
      <Container variant="form" style={styles.container}>
        <Typography color="white" fontSize={25} letterSpacing={-0.8} bold>
          Logout
        </Typography>
        <Typography color="theme" fontSize={10} letterSpacing={0.5} bold>
          {name.toUpperCase()}
        </Typography>
      </Container>
      <Avatar source={source} size="md" />
    </Pressable>
  )
}

export default LogoutButton
