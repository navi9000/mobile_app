import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View, ViewProps } from "react-native"

type Props = {
  color: string
  style?: ViewProps["style"]
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
  },
})

const Divider: FC<Resolve<Props>> = ({ color = "black", style }) => {
  return (
    <View style={[styles.divider, { backgroundColor: color }, style]}></View>
  )
}

export default Divider
