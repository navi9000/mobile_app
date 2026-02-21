import { FC } from "react"
import MainBackground from "../atoms/MainBackground/MainBackground"
import Container from "../atoms/Container/Container"
import Avatar from "../atoms/Avatar/Avatar"
import { StyleSheet, View } from "react-native"
import PersonalInfo from "../organisms/PersonalInfo/PersonalInfo"

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  inlay: {
    flex: 1,
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
    <MainBackground>
      <Container variant="default" style={styles.container}>
        <View style={styles.inlay}>
          <Avatar
            source={require("@/assets/images/provided_avatar.png")}
            size="profile"
            style={styles.avatar}
          />
          <PersonalInfo style={styles.contents} {...personalInfo} />
        </View>
      </Container>
    </MainBackground>
  )
}

export default ProfilePage
