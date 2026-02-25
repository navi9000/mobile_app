import component from "./LabelWithIcon"
import type { StoryObj, Meta } from "@storybook/react-native-web-vite"

const iconSource = require("@/assets/images/clock.svg")

const meta = {
  component,
  title: "Molecules/LabelWithIcon",
  parameters: {
    layout: "centered",
    background: "blue",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconSource,
    text: "New message",
  },
}
