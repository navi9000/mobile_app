import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Message, Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  message: Omit<Message, "author">
  isOwn?: boolean
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  container_own: {
    flexDirection: "row-reverse",
  },
  avatar: {
    alignSelf: "flex-start",
  },
  messageContainer: {
    backgroundColor: "white",
    width: "auto",
    gap: 10,
    boxShadow: "0 40px 50px 0 rgba(0, 0, 0, 0.2)",
  },
})

const ChatMessage: FC<Resolve<Props>> = ({ message, isOwn }) => {
  return (
    <View style={isOwn ? styles.container_own : styles.container}>
      <Avatar
        size="xs"
        source={message.authorImage}
        shadow
        style={styles.avatar}
      />
      <Container variant="default" style={styles.messageContainer}>
        <Typography color="dark10" fontSize={15}>
          {message.text}
        </Typography>
        <Typography color="theme" fontSize={10} bold>
          {message.timePassed}
        </Typography>
      </Container>
    </View>
  )
}

export default ChatMessage
