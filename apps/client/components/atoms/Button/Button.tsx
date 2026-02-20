import { ComponentProps, FC } from "react"
import { Pressable, PressableProps } from "react-native"

const Button: FC<PressableProps> = ({ style, ...rest }) => {
  return <Pressable style={style} {...rest} />
}

export default Button
