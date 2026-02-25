import type { StoryObj, Meta } from "@storybook/react-native-web-vite"
import component from "./ProfileCounter"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  decorator: {
    width: "100%",
    backgroundColor: "blue",
  },
})

const meta = {
  component,
  title: "Molecules/ProfileCounter",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Followers",
    value: 145,
  },
}

export const Thousands: Story = {
  args: {
    ...Default.args,
    value: 1349,
  },
}

export const LargeThousands: Story = {
  args: {
    ...Default.args,
    value: 13498,
  },
}

export const Millions: Story = {
  args: {
    ...Default.args,
    value: 12345674,
  },
}

export const Billions: Story = {
  args: {
    ...Default.args,
    value: 1234567890,
  },
}
