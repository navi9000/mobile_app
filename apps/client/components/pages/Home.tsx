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
  return (
    <View style={styles.container}>
      <HomeMessages messageList={messageList} />
      <HomeRecentChats />
    </View>
  )
}

export default HomePage
