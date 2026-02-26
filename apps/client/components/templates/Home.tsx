import { FC } from "react"
import { StyleSheet, View } from "react-native"
import HomeMessages from "../organisms/HomeMessages/HomeMessages"
import HomeRecentChats from "../organisms/HomeRecentChats/HomeRecentChats"
import { Message, Resolve } from "@/utils/types"

type Props = {
  messageList: Omit<Message, "text">[]
  recentChats: Message[]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const HomePageTemplate: FC<Resolve<Props>> = ({ messageList, recentChats }) => {
  return (
    <View style={styles.container}>
      <HomeMessages messageList={messageList} />
      <HomeRecentChats chatList={recentChats} />
    </View>
  )
}

export default HomePageTemplate
