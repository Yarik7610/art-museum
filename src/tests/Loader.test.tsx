import { render, screen } from "@testing-library/react"
import { Loader } from "../components/Loader"

test("renders loader icon", () => {
  render(<Loader />)

  const loaderIcon = screen.getByAltText("Loader icon")
  expect(loaderIcon).toBeInTheDocument()
})
