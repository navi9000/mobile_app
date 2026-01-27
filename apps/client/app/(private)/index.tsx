import Typography from "@/components/atoms/Typography/Typography"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Button, View } from "react-native"

const Home: FC = () => {
  const { navigate } = useRouter()
  return (
    <View>
      <Typography>Home</Typography>
      <Button
        onPress={() => {
          navigate("/signin")
        }}
        title="Logout"
      />
    </View>
  )
}

export default Home
