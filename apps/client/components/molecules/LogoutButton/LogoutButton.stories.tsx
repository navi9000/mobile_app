import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./LogoutButton"

const meta = {
  title: "Molecules/LogoutButton",
  component,
  args: {
    source: require("@/assets/images/provided_avatar.png"),
    name: "Andrea Jameson",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
