import HomePageTemplate from "@/components/templates/Home"
import { Message } from "@/utils/types"
import { FC } from "react"

const Home: FC = () => {
  const messageList: Omit<Message, "text">[] = [
    {
      author: "John Doe",
      authorImage:
        "https://res.cloudinary.com/da6rqo2u6/image/upload/v1773066497/users/shoes_v2.avif",
      timePassed: "Just now",
    },
  ]

  const recentChats: Message[] = Array.from({ length: 10 }, () => ({
    authorImage:
      "https://res.cloudinary.com/da6rqo2u6/image/upload/v1773066497/users/shoes_v2.avif",
    author: "Andrea Jameson",
    text: "I am on my way",
    timePassed: "Just now",
  }))

  return (
    <HomePageTemplate messageList={messageList} recentChats={recentChats} />
  )
}

export default Home
