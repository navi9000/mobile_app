import { Resolve } from "@/utils/types"
import { ComponentProps, FC } from "react"
import { StyleSheet, Text } from "react-native"

type Color = "white" | "dark" | "theme"
type Size =
  | "xlheader"
  | "header"
  | "large"
  | "medium"
  | "regular"
  | "small"
  | "tiny"

interface CommonProps {
  children: string
  color?: Color
  size?: Size
  bold?: boolean
  shadow?: boolean
  underlined?: boolean
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Karla_400Regular",
  },
  // bold
  text_bold: {
    fontFamily: "Karla_700Bold",
    fontWeight: 700,
  },
  // color
  text_colorwhite: {
    color: "#fff",
  },
  text_colordark: {
    color: "#000",
  },
  text_colortheme: {
    color: "#ad807d",
  },
  // size
  text_sizexlheader: {
    fontSize: 100,
    letterSpacing: -5,
  },
  text_sizeheader: {
    fontSize: 35,
    letterSpacing: -1.05,
  },
  text_sizelarge: {
    fontSize: 25,
    letterSpacing: -0.5,
  },
  text_sizemedium: {
    fontSize: 17,
    letterSpacing: -0.5,
  },
  text_sizeregular: {
    fontSize: 15,
    letterSpacing: -0.5,
  },
  text_sizesmall: {
    fontSize: 11,
    letterSpacing: -0.5,
  },
  text_sizetiny: {
    fontSize: 10,
    letterSpacing: -0.5,
  },
  // shadow
  text_shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { height: 4, width: 0 },
    textShadowRadius: 4,
  },
  // underlined
  text_underlined: {
    textDecorationLine: "underline",
  },
})

const Typography: FC<Resolve<CommonProps & ComponentProps<typeof Text>>> = ({
  children,
  style,
  bold,
  size,
  shadow,
  color = "dark",
  underlined,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.text_bold,
        !!color && styles[`text_color${color}`],
        !!size && styles[`text_size${size}`],
        shadow && styles.text_shadow,
        underlined && styles.text_underlined,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default Typography
