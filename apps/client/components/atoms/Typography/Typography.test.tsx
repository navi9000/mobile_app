import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"
import * as stories from "./Typography.stories"
import { describe, test, expect } from "vitest"

const { Default } = composeStories(stories)

describe("Typography", () => {
  // test("should show on the screen", async () => {
  //   const { getByText } = render(<Default>Hello</Default>)

  //   expect(getByText("Hello")).toBeInTheDocument()
  // })
  test("basic test", () => {
    expect(true).not.toBeTruthy()
  })
})
