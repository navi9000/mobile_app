import type { StoryObj, Meta } from "@storybook/react-native-web-vite"
import component from "./PersonalInfo"

const meta = {
  component,
  title: "Organisms/PersonalInfo",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    location: "San Francisco",
    occupation: "Event Manager",
    followers: 145234,
    following: 56304,
    likes: 1690,
  },
}
