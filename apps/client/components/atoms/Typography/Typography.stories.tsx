import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./Typography"

const meta = {
  title: "Atoms/Typography",
  component,
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Bold: Story = {
  args: {
    children: "Bold",
    bold: true,
  },
}

export const Underlined: Story = {
  args: {
    children: "Underlined",
    underlined: true,
  },
}

export const Shadow: Story = {
  args: {
    children: "Shadow",
    shadow: true,
  },
}
