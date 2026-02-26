import HomePageTemplate from "@/components/templates/Home"
import { Message } from "@/utils/types"
import { FC } from "react"

const Home: FC = () => {
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
    <HomePageTemplate messageList={messageList} recentChats={recentChats} />
  )
}

export default Home
