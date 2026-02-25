import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
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
    paddingBottom: 0,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 20,
    paddingBottom: 27,
    boxSizing: "content-box",
  },
  innerContainer_notlast: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
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
      <View
        style={[
          styles.innerContainer,
          !isLast && styles.innerContainer_notlast,
        ]}
      >
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
    </Container>
  )
}

export default ChatPreview
