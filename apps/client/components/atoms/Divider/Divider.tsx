import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  color: string
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
  },
})

const Divider: FC<Resolve<Props>> = ({ color = "black" }) => {
  return <View style={[styles.divider, { backgroundColor: color }]}></View>
}

export default Divider
