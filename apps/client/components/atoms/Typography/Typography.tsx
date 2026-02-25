import { Resolve } from "@/utils/types"
import { ComponentProps, FC } from "react"
import { StyleSheet, Text } from "react-native"

type Color = "white" | "dark" | "dark10" | "theme" | "theme10"

interface CommonProps {
  children: string
  color?: Color
  bold?: boolean
  shadow?: boolean
  underlined?: boolean
  letterSpacing?: number
  fontSize?: number
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
  text_colordark10: {
    color: "#050706",
  },
  text_colortheme: {
    color: "#ad807d",
  },
  text_colortheme10: {
    color: "#ffbdb8",
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
  shadow,
  color = "dark",
  underlined,
  letterSpacing,
  fontSize,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.text_bold,
        !!color && styles[`text_color${color}`],
        shadow && styles.text_shadow,
        underlined && styles.text_underlined,
        {
          letterSpacing,
          fontSize,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default Typography
