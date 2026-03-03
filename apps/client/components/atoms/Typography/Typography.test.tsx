import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"
import * as stories from "./Typography.stories"
import { describe, test, expect } from "vitest"

const { Default, Bold, Underlined, Shadow } = composeStories(stories)

describe("Typography", () => {
  test("should show on the screen", async () => {
    const { getByText } = render(<Default>Hello</Default>)

    expect(getByText("Hello")).toBeInTheDocument()
  })
  test("text is bold when the bold attribute is added", () => {
    const { getByText } = render(<Bold />)
    expect(getByText("Bold")).toHaveClass(/r-fontWeight/)
  })
  test("text is underlined when the underline attribute is added", () => {
    const { getByText } = render(<Underlined />)
    expect(getByText("Underlined")).toHaveClass(/r-textDecorationLine/)
  })
  test("text has a box-shadow when the shadow attribute is added", () => {
    const { getByText } = render(<Shadow />)
    expect(getByText("Shadow")).toHaveClass(/r-textShadow/)
  })
})
