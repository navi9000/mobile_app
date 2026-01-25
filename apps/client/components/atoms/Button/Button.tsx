import { ComponentProps, FC } from "react"
import { Pressable } from "react-native"

const Button: FC<ComponentProps<typeof Pressable>> = ({ style, ...rest }) => {
  return <Pressable {...rest} />
}

export default Button
