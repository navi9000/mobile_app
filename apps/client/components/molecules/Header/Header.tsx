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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

const Header: FC<Resolve<Props>> = ({ title, leftIcon, rightIcon }) => {
  return (
    <Container variant="head" style={styles.container}>
      <Pressable onPress={leftIcon?.onPress}>
        <Image source={leftIcon?.source} />
      </Pressable>
      <Typography color="white" size="header">
        {title}
      </Typography>
      <Pressable onPress={rightIcon?.onPress}>
        <Image source={rightIcon?.source} />
      </Pressable>
    </Container>
  )
}

export default Header
