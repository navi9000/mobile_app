import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { Image, ImageSourcePropType, Pressable, StyleSheet } from "react-native"

type HeaderIconProps = {
  source: ImageSourcePropType
  onPress: (props?: unknown) => void
}

type Props = {
  title: string
  leftIcon?: HeaderIconProps
  rightIcon?: HeaderIconProps
  transparent?: boolean
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container_transparent: {
    backgroundColor: "transparent",
  },
  icon: {
    height: 25,
    width: 25,
  },
})

const Header: FC<Resolve<Props>> = ({
  title,
  leftIcon,
  rightIcon,
  transparent = false,
}) => {
  return (
    <Container
      variant="head"
      style={[styles.container, transparent && styles.container_transparent]}
    >
      <Pressable onPress={leftIcon?.onPress} style={styles.icon}>
        <Image source={leftIcon?.source} style={styles.icon} />
      </Pressable>
      <Typography color="white" fontSize={17}>
        {title}
      </Typography>
      <Pressable onPress={rightIcon?.onPress} style={styles.icon}>
        <Image source={rightIcon?.source} style={styles.icon} />
      </Pressable>
    </Container>
  )
}

export default Header
