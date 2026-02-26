import { Resolve } from "@/utils/types"
import { FC } from "react"
import { Image, ImageProps, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: "auto",
  },
  image_full: {
    width: "100%",
    height: "100%",
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
  shadow: {
    boxShadow: "0 30px 40px 0 rgba(0, 0, 0, 0.2)",
  },
})

type AvatarSize = "full" | "lg" | "md" | "sm" | "xs"

type Props = {
  source: ImageProps["source"]
  size: AvatarSize
  style?: ImageProps["style"]
  shadow?: boolean
}

const Avatar: FC<Resolve<Props>> = ({
  source,
  size,
  style,
  shadow = false,
}) => {
  return (
    <View
      style={[
        styles.image,
        !!size && styles[`image_${size}`],
        shadow && styles.shadow,
        style,
      ]}
    >
      <Image source={source} style={{ height: "100%", width: "100%" }} />
    </View>
  )
}

export default Avatar
