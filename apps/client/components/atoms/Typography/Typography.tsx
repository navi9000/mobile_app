import { exhaustiveCheck } from "@/utils/type-checkers"
import { FC } from "react"
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
      return 200
    case "header":
      return 70
    case "medium":
      return 34
    case "regular":
      return 30
    case "small":
      return 22
    case "tiny":
      return 20
    default:
      return exhaustiveCheck(size)
  }
}

function styles({ size, color, bold, shadow }: Omit<CommonProps, "children">) {
  return StyleSheet.create({
    text: {
      fontSize: sizeAdapter(size!),
      color: colorAdapter(color!),
      fontWeight: bold ? 700 : 400,
      letterSpacing: size === "xl-header" ? -0.05 : -0.03,
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

const Typography: FC<CommonProps> = ({ children, ...rest }) => {
  const props = { ...defaultProps, ...rest }
  return <Text style={styles(props).text}>{children}</Text>
}

export default Typography
