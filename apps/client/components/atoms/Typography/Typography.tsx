import { exhaustiveCheck } from "@/utils/type-checkers"
import { Resolve } from "@/utils/types"
import { ComponentProps, FC } from "react"
import { StyleSheet, Text } from "react-native"

type Color = "white" | "dark" | "theme"
type Size = "xl-header" | "header" | "medium" | "regular" | "small" | "tiny"

interface CommonProps {
  children: string
  color?: Color
  size?: Size
  bold?: boolean
  shadow?: boolean
}

function colorAdapter(color: Color) {
  switch (color) {
    case "white":
      return "#fff"
    case "dark":
      return "#000"
    case "theme":
      return "#ad807d"
    default:
      return exhaustiveCheck(color)
  }
}

function sizeAdapter(size: Size) {
  switch (size) {
    case "xl-header":
      return 100
    case "header":
      return 35
    case "medium":
      return 17
    case "regular":
      return 15
    case "small":
      return 11
    case "tiny":
      return 10
    default:
      return exhaustiveCheck(size)
  }
}

function letterSpacingAdapter(size: Size) {
  switch (size) {
    case "xl-header":
      return -5
    case "header":
      return -1.05
    case "medium":
    case "regular":
    case "small":
    case "tiny":
      return -0.5
    default:
      return exhaustiveCheck(size)
  }
}

function styles({ size, color, bold, shadow }: Omit<CommonProps, "children">) {
  return StyleSheet.create({
    text: {
      fontFamily: bold ? "Karla_700Bold" : "Karla_400Regular",
      fontSize: sizeAdapter(size!),
      color: colorAdapter(color!),
      fontWeight: bold ? 700 : 400,
      letterSpacing: letterSpacingAdapter(size!),
      textShadowColor: shadow ? "rgba(0, 0, 0, 0.25)" : undefined,
      textShadowOffset: shadow ? { height: 4, width: 0 } : undefined,
      textShadowRadius: 4,
    },
  })
}

const defaultProps: Omit<CommonProps, "children"> = {
  size: "regular",
  color: "dark",
  bold: false,
  shadow: false,
}

const Typography: FC<Resolve<CommonProps & ComponentProps<typeof Text>>> = ({
  children,
  style,
  ...rest
}) => {
  const props = { ...defaultProps, ...rest }
  return (
    <Text style={[styles(props).text, style]} {...rest}>
      {children}
    </Text>
  )
}

export default Typography
