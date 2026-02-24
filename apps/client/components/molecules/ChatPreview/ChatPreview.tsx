import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Divider from "@/components/atoms/Divider/Divider"
import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { ImageProps, StyleSheet, View } from "react-native"

type Props = {
  img: ImageProps["source"]
  name: string
  lastMessage: string
  timePassed: string
  isLast?: boolean
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    flexDirection: "row",
    gap: 20,
  },
  inlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  divider: {
    transform: [{ translateY: 27 }],
  },
})

const ChatPreview: FC<Resolve<Props>> = ({
  img,
  name,
  lastMessage,
  timePassed,
  isLast = false,
}) => {
  return (
    <Container variant="default" style={styles.container}>
      <View style={styles.innerContainer}>
        <Avatar size="xs" source={img} />
        <View style={styles.inlay}>
          <View style={styles.topRow}>
            <Typography color="dark" bold fontSize={12}>
              {name}
            </Typography>
            <Typography color="theme" bold fontSize={10}>
              {timePassed}
            </Typography>
          </View>
          <Typography fontSize={13} color="dark10">
            {lastMessage}
          </Typography>
        </View>
      </View>
      {!isLast && <Divider color="#000000" style={styles.divider} />}
    </Container>
  )
}

export default ChatPreview
