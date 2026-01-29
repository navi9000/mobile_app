import { Resolve } from "@/utils/types"
import { FC } from "react"
import { Image, ImageProps, StyleSheet, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  gradient: {
    position: "absolute",
    height: "35%",
    width: "100%",
    zIndex: 1,
    bottom: 0,
  },
  image: {
    aspectRatio: 1,
    height: "auto",
  },
  image_profile: {
    width: "100%",
    aspectRatio: 1.14,
  },
  image_lg: {
    width: 100,
  },
  image_md: {
    width: 80,
  },
  image_sm: {
    width: 50,
  },
  image_xs: {
    width: 40,
  },
})

type AvatarSize = "profile" | "lg" | "md" | "sm" | "xs"

type Props = {
  source: ImageProps["source"]
  size: AvatarSize
}

const Avatar: FC<Resolve<Props>> = ({ source, size }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={[styles.image, !!size && styles[`image_${size}`]]}
      />
      {size === "profile" && (
        <LinearGradient
          style={styles.gradient}
          colors={["#000", "rgba(0,0,0,0)"]}
          start={{ x: 0, y: 0.35 }}
          end={{ x: 0, y: 0 }}
        />
      )}
    </View>
  )
}

export default Avatar
