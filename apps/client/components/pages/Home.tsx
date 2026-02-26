import { FC } from "react"
import { StyleSheet, View } from "react-native"
import HomeMessages from "../organisms/HomeMessages/HomeMessages"
import HomeRecentChats from "../organisms/HomeRecentChats/HomeRecentChats"
import { Message } from "@/utils/types"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const HomePage: FC = () => {
  const messageList: Omit<Message, "text">[] = [
    {
      author: "John Doe",
      authorImage: require("@/assets/images/provided_avatar.png"),
      timePassed: "Just now",
    },
  ]

  const recentChats: Message[] = Array.from({ length: 10 }, () => ({
    authorImage: require("@/assets/images/provided_avatar.png"),
    author: "Andrea Jameson",
    text: "I am on my way",
    timePassed: "Just now",
  }))

  return (
    <View style={styles.container}>
      <HomeMessages messageList={messageList} />
      <HomeRecentChats chatList={recentChats} />
    </View>
  )
}

export default HomePage
