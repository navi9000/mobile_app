import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import Typography from "@/components/atoms/Typography/Typography"
import { Auth } from "@/utils/auth"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Button } from "react-native"

const Home: FC = () => {
  const { navigate } = useRouter()

  const logout = async () => {
    await Auth.clear()
    navigate("/signin")
  }
  return (
    <MainBackground>
      <Typography>Home</Typography>
      <Button onPress={logout} title="Logout" />
    </MainBackground>
  )
}

export default Home
