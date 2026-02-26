import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { LinearGradient } from "expo-linear-gradient"
import { FC } from "react"
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native"

type Props = {
  image: ImageSourcePropType
  firstName: string
  lastName: string
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  container: {
    height: 285,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    height: "35%",
    width: "100%",
    zIndex: 1,
    bottom: 0,
  },
  inlay: {
    position: "absolute",
    justifyContent: "flex-end",
    height: "100%",
    zIndex: 2,
  },
})

const ProfilePicture: FC<Resolve<Props>> = ({
  image,
  firstName,
  lastName,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Avatar size="full" source={image} />
      <LinearGradient
        style={styles.gradient}
        colors={["#000", "rgba(0,0,0,0)"]}
        start={{ x: 0, y: 0.35 }}
        end={{ x: 0, y: 0 }}
      />
      <Container variant="default" style={styles.inlay}>
        <Typography
          fontSize={35}
          letterSpacing={-0.5}
          color="white"
          bold
          shadow
        >
          {firstName}
        </Typography>
        <Typography
          fontSize={35}
          letterSpacing={-0.5}
          color="white"
          bold
          shadow
        >
          {lastName}
        </Typography>
      </Container>
    </View>
  )
}

export default ProfilePicture
