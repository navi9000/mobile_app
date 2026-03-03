import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { FC } from "react"
import { StyleSheet, FlatList } from "react-native"
import ChatPreview from "@/components/molecules/ChatPreview/ChatPreview"
import { Message, Resolve } from "@/utils/types"

type Props = {
  chatList: Message[]
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    gap: 20,
    paddingBottom: 0,
  },
})

const HomeRecentChats: FC<Resolve<Props>> = ({ chatList }) => {
  return (
    <Container variant="default" style={styles.container}>
      <Typography color="white" fontSize={10} letterSpacing={1} bold>
        {"Recent chats".toUpperCase()}
      </Typography>
      <FlatList
        data={chatList}
        renderItem={({ item, index }) => (
          <ChatPreview message={item} isLast={index === 9} />
        )}
      />
    </Container>
  )
}

export default HomeRecentChats
