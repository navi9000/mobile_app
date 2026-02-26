import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import LabelWithIcon from "@/components/molecules/LabelWithIcon/LabelWithIcon"
import NewMessage from "@/components/molecules/NewMessage/NewMessage"
import { newMessageLabelByNumber } from "@/utils/numbers"
import { Message, Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet } from "react-native"

type Props = {
  messageList: Omit<Message, "text">[]
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
    height: 199,
  },
})

const HomeMessages: FC<Resolve<Props>> = ({ messageList }) => {
  const lastMessage = messageList.reverse()[0]

  if (!lastMessage) {
    return (
      <Container variant="default" style={styles.container}>
        <Typography color="white" letterSpacing={0.5}>
          No new messages
        </Typography>
      </Container>
    )
  }

  return (
    <Container variant="default" style={styles.container}>
      <LabelWithIcon
        iconSource={require("@/assets/images/bell.svg")}
        text={newMessageLabelByNumber(messageList.length)}
      />
      <NewMessage {...lastMessage} />
    </Container>
  )
}

export default HomeMessages
