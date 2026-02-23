import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import { Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla"
import MainBackground from "@/components/atoms/MainBackground/MainBackground"
import { StyleSheet, View } from "react-native"
import { ThemeProvider, DefaultTheme } from "@react-navigation/native"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const styles = StyleSheet.create({
  root: {
    minWidth: 320,
    maxWidth: 750,
  },
})

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <MainBackground>
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: "transparent" },
        }}
      >
        <RootLayoutNav />
      </ThemeProvider>
    </MainBackground>
  )
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(private)"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
    </Stack>
  )
}
