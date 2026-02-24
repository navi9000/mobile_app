import { FC } from "react"
import component from "./Container"
import type { StoryObj, Meta } from "@storybook/react-native-web-vite"
import { View } from "react-native"
import Typography from "../Typography/Typography"

const Inlay: FC = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",
      }}
    >
      <Typography size="regular">Inlay</Typography>
    </View>
  )
}

const meta = {
  component,
  title: "Atoms/Container",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    style: {
      backgroundColor: "black",
    },
    children: <Inlay />,
  },
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
  },
}

export const Head: Story = {
  args: {
    variant: "head",
  },
}

export const Form: Story = {
  args: {
    variant: "form",
  },
}
