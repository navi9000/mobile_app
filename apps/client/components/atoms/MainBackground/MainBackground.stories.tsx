import { Meta, StoryObj } from "@storybook/react-native-web-vite"
import component from "./MainBackground"
import Typography from "../Typography/Typography"

const meta = {
  title: "Atoms/MainBackground",
  component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography>Default</Typography>,
  },
}
