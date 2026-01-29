import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./NavigationModal"

const meta = {
  title: "Organisms/NavigationModal",
  component,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    source: require("@/assets/images/provided_avatar.png"),
    name: "Andrea Jameson",
    close: () => {},
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
