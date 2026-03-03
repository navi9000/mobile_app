import Container from "@/components/atoms/Container/Container"
import Divider from "@/components/atoms/Divider/Divider"
import Typography from "@/components/atoms/Typography/Typography"
import ProfileCounter from "@/components/molecules/ProfileCounter/ProfileCounter"
import useUserProfile from "@/features/userProfile/useUserProfile"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View, type ViewProps } from "react-native"

type Props = {
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
  followers,
  following,
  likes,
  style,
}) => {
  const { location, occupation } = useUserProfile()
  return (
    <Container style={[styles.container, style]} variant="default">
      <View>
        <Typography fontSize={14} color="white">
          {occupation}
        </Typography>
        <Typography fontSize={14} color="white">
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
