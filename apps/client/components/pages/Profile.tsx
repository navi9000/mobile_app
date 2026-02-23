import { FC } from "react"
import Container from "../atoms/Container/Container"
import Avatar from "../atoms/Avatar/Avatar"
import { StyleSheet } from "react-native"
import PersonalInfo from "../organisms/PersonalInfo/PersonalInfo"

const styles = StyleSheet.create({
  container: {
    height: "auto",
  },
  avatar: {
    flex: 1,
  },
  contents: {
    flex: 1,
  },
})

const ProfilePage: FC = () => {
  const personalInfo = {
    location: "San Francisco",
    occupation: "Event Manager",
    followers: 145234,
    following: 56304,
    likes: 1690,
  }
  return (
    <Container variant="default" style={styles.container}>
      <Avatar
        source={require("@/assets/images/provided_avatar.png")}
        size="profile"
        style={styles.avatar}
      />
      <PersonalInfo style={styles.contents} {...personalInfo} />
    </Container>
  )
}

export default ProfilePage
