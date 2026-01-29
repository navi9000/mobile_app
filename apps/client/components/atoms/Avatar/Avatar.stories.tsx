import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./Avatar"

const meta = {
  title: "Atoms/Avatar",
  component,
  args: {
    source: require("@/assets/images/provided_avatar.png"),
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Profile: Story = {
  args: {
    size: "profile",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Extrasmall: Story = {
  args: {
    size: "xs",
  },
}
