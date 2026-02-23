import component from "./ChatPreview"
import { StoryObj, Meta } from "@storybook/react-native-web-vite"

const meta = {
  component,
  title: "Molecules/ChatPreview",
  args: {
    img: require("@/assets/images/provided_avatar.png"),
    name: "Andrea Jameson",
    lastMessage: "I am on my way",
    timePassed: "Just now",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
