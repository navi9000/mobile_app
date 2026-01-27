import AsyncStorage from "@react-native-async-storage/async-storage"
import { view } from "./storybook.requires"
import { useFonts } from "expo-font"
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla"

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
})

const Storybook = () => {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return <StorybookUIRoot />
}

export default Storybook
