import type { StoryObj, Meta } from "@storybook/react-native-web-vite"
import component from "./Divider"

const meta = {
  component,
  title: "Atoms/Divider",
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: "black",
  },
}
