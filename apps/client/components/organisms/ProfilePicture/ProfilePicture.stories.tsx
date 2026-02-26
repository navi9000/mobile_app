import component from "./ProfilePicture"
import type { StoryObj, Meta } from "@storybook/react-native-web-vite"

const meta = {
  component,
  title: "Organisms/ProfilePicture",
  args: {
    image: require("@/assets/images/provided_avatar.png"),
    firstName: "Andrea",
    lastName: "Johnson",
    style: {
      maxWidth: 750,
    },
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
