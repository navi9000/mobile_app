import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./Input"

const meta = {
  title: "Atoms/Input",
  component,
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "Default input",
  },
}
