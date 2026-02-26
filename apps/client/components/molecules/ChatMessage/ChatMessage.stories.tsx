import component from "./ChatMessage"
import type { StoryObj, Meta } from "@storybook/react-native-web-vite"

const meta = {
  component,
  title: "Molecules/ChatMessage",
  args: {
    message: {
      authorImage: require("@/assets/images/provided_avatar.png"),
      timePassed: "5 minutes ago",
      text: "Hi Andrea! How are you?",
    },
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Own: Story = {
  args: {
    isOwn: true,
  },
}

export const Incoming: Story = {
  args: {
    isOwn: false,
  },
}

export const LongIncoming: Story = {
  args: {
    message: {
      ...meta.args.message,
      text: "Doing good, how do you feel about grabbing a coffee sometime?",
    },
  },
}
