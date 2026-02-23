import Avatar from "@/components/atoms/Avatar/Avatar"
import Container from "@/components/atoms/Container/Container"
import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { FC } from "react"
import { ImageProps, StyleSheet, View } from "react-native"

type Props = {
  img: ImageProps["source"]
  name: string
  timePassed: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    boxShadow: "0 40px 50px 0 rgba(0, 0, 0, 0.2)",
    width: "100%",
  },
  inlay: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-end",
  },
  timePassed: {
    alignSelf: "flex-end",
  },
})

const NewMessage: FC<Resolve<Props>> = ({ img, name, timePassed }) => {
  return (
    <View style={styles.container}>
      <Avatar source={img} size="lg" />
      <Container variant="default" style={styles.inlay}>
        <View style={styles.textContainer}>
          <Typography color="dark" bold style={{ fontSize: 12 }}>
            {name}
          </Typography>
          <Typography color="theme" size="tiny" bold style={styles.timePassed}>
            {timePassed}
          </Typography>
        </View>
      </Container>
    </View>
  )
}

export default NewMessage
