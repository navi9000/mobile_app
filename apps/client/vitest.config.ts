import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    server: {
      deps: {
        inline: [
          "react-native-web",
          /react-native/,
          /@react-native/,
          /expo/,
          /@expo/,
          /@react-navigation/,
          /react-native-reanimated/,
          /react-native-safe-area-context/,
        ],
      },
    },
  },
  esbuild: {
    jsx: "automatic",
    loader: "tsx",
  },
})
