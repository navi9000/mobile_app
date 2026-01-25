import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./FormInput"

const meta = {
  title: "Molecules/FormInput",
  component,
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Form input",
    value: "Default input",
  },
}
