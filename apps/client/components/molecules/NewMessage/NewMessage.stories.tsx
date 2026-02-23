import component from "./NewMessage"
import { StoryObj, Meta } from "@storybook/react-native-web-vite"

const meta = {
  component,
  title: "Molecules/NewMessage",
  args: {
    img: require("@/assets/images/provided_avatar.png"),
    name: "Andrea Jameson",
    timePassed: "Just now",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
