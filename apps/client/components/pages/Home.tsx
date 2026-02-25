import { FC } from "react"
import { StyleSheet, View } from "react-native"
import HomeMessages from "../organisms/HomeMessages/HomeMessages"
import HomeRecentChats from "../organisms/HomeRecentChats/HomeRecentChats"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const HomePage: FC = () => {
  return (
    <View style={styles.container}>
      <HomeMessages />
      <HomeRecentChats />
    </View>
  )
}

export default HomePage
