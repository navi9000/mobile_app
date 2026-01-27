import Header from "@/components/molecules/Header/Header"
import { Stack } from "expo-router"
import { FC } from "react"

const PrivateLayout: FC = () => {
  const burgerIcon = require("@/assets/images/burger.svg")

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <Header
              title="Hi, user"
              leftIcon={{ source: burgerIcon, onPress: () => {} }}
            />
          ),
        }}
      />
    </Stack>
  )
}

export default PrivateLayout
