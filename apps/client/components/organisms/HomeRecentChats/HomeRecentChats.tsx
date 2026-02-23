import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { FC } from "react"
import { StyleSheet, FlatList } from "react-native"
import ChatPreview from "@/components/molecules/ChatPreview/ChatPreview"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    gap: 20,
    paddingBottom: 0,
  },
})

const TEMP_DATA = Array.from({ length: 10 }, () => ({
  img: require("@/assets/images/provided_avatar.png"),
  name: "Andrea Jameson",
  lastMessage: "I am on my way",
  timePassed: "Just now",
}))

const HomeRecentChats: FC = () => {
  return (
    <Container variant="default" style={styles.container}>
      <Typography color="white" size="tiny" bold>
        {"Recent chats".toUpperCase()}
      </Typography>
      <FlatList
        data={TEMP_DATA}
        renderItem={({ item, index }) => (
          <ChatPreview {...item} isLast={index === 9} />
        )}
      />
    </Container>
  )
}

export default HomeRecentChats
