import Container from "@/components/atoms/Container/Container"
import Divider from "@/components/atoms/Divider/Divider"
import Typography from "@/components/atoms/Typography/Typography"
import ProfileCounter from "@/components/molecules/ProfileCounter/ProfileCounter"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View, ViewProps } from "react-native"

type Props = {
  location: string
  occupation: string
  followers: number
  following: number
  likes: number
  style?: ViewProps["style"]
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A0FF",
    justifyContent: "space-around",
  },

  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

const PersonalInfo: FC<Resolve<Props>> = ({
  location,
  occupation,
  followers,
  following,
  likes,
  style,
}) => {
  return (
    <Container style={[styles.container, style]} variant="default">
      <View>
        <Typography size="regular" color="white">
          {occupation}
        </Typography>
        <Typography size="regular" color="white">
          {location}
        </Typography>
      </View>
      <Divider color="white" />
      <View style={styles.counters}>
        <ProfileCounter title="Followers" value={followers} />
        <ProfileCounter title="Following" value={following} />
        <ProfileCounter title="Likes" value={likes} />
      </View>
    </Container>
  )
}

export default PersonalInfo
