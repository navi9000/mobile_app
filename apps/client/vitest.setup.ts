import { vi } from "vitest"
import { setProjectAnnotations } from "@storybook/react" // or @storybook/react-native
import * as globalConfig from "./.storybook/preview"
import "@testing-library/jest-dom/vitest"

setProjectAnnotations(globalConfig)

// Expo native mocks
vi.mock("expo-font", () => ({}))
vi.mock("expo-asset", () => ({}))
vi.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock"),
)

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
