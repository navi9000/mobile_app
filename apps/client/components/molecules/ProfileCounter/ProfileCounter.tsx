import Typography from "@/components/atoms/Typography/Typography"
import { formatLargeNumber } from "@/utils/numbers"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  title: string
  value: number
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
})

const ProfileCounter: FC<Resolve<Props>> = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Typography color="white" fontSize={25} bold>
        {formatLargeNumber(value)}
      </Typography>
      <Typography color="white" fontSize={10} letterSpacing={1} bold>
        {title.toUpperCase()}
      </Typography>
    </View>
  )
}

export default ProfileCounter
