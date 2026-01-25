import { Resolve } from "@/utils/types"
import { FC, PropsWithChildren } from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

type Variant = "default" | "head" | "form"

type Props = {
  style?: StyleProp<ViewStyle>
  variant: Variant
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  container_default: {
    padding: 27,
  },
  container_head: {
    paddingInline: 12,
    paddingTop: 29,
    paddingBottom: 10,
  },
  container_form: {
    paddingInline: 40,
    paddingBlock: 40,
    backgroundColor: "#fff",
  },
})

const Container: FC<Resolve<PropsWithChildren<Props>>> = ({
  style,
  variant,
  children,
}) => {
  return (
    <View style={[styles.container, styles[`container_${variant}`], style]}>
      {children}
    </View>
  )
}

export default Container
