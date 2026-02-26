import { FC } from "react"
import Container from "../atoms/Container/Container"
import Avatar from "../atoms/Avatar/Avatar"
import { ImageSourcePropType, StyleSheet, View } from "react-native"
import PersonalInfo from "../organisms/PersonalInfo/PersonalInfo"
import { Resolve } from "@/utils/types"

type Props = {
  firstName: string
  lastName: string
  avatar: ImageSourcePropType
  location: string
  occupation: string
  followers: number
  following: number
  likes: number
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    flex: 1,
  },
  contents: {
    flex: 1,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "75%",
    backgroundColor: "black",
    zIndex: -1,
    bottom: 0,
  },
})

const ProfilePageTemplate: FC<Resolve<Props>> = ({
  firstName,
  lastName,
  avatar,
  ...rest
}) => {
  return (
    <>
      <Container variant="default" style={styles.container}>
        <Avatar source={avatar} size="profile" style={styles.avatar} />
        <PersonalInfo style={styles.contents} {...rest} />
      </Container>
      <View style={styles.background} />
    </>
  )
}

export default ProfilePageTemplate
