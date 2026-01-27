import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import Typography from "@/components/atoms/Typography/Typography"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Button, View } from "react-native"

const Home: FC = () => {
  const { navigate } = useRouter()
  return (
    <MainBackground>
      <Typography>Home</Typography>
      <Button
        onPress={() => {
          navigate("/signin")
        }}
        title="Logout"
      />
    </MainBackground>
  )
}

export default Home
