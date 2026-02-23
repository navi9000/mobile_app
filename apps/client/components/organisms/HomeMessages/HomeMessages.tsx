import Container from "@/components/atoms/Container/Container"
import LabelWithIcon from "@/components/molecules/LabelWithIcon/LabelWithIcon"
import NewMessage from "@/components/molecules/NewMessage/NewMessage"
import { FC } from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
  },
})

const HomeMessages: FC = () => {
  // label
  const bellIcon = require("@/assets/images/bell.svg")
  const label = "1 new message"

  // new message
  const avatarIcon = require("@/assets/images/provided_avatar.png")
  const name = "John Doe"
  const timePassed = "Just now"

  return (
    <Container variant="default" style={styles.container}>
      <LabelWithIcon iconSource={bellIcon} text={label} />
      <NewMessage img={avatarIcon} name={name} timePassed={timePassed} />
    </Container>
  )
}

export default HomeMessages
