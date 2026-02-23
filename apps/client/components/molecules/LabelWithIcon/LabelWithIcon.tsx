import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View, Image, ImageProps } from "react-native"

type Props = {
  iconSource: ImageProps["source"]
  text: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  icon: {
    overflow: "hidden",
    height: 25,
    width: 25,
  },
  text: {
    letterSpacing: 1,
  },
})

const LabelWithIcon: FC<Resolve<Props>> = ({ iconSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <Typography color="white" size="small" style={styles.text}>
        {text.toUpperCase()}
      </Typography>
    </View>
  )
}

export default LabelWithIcon
