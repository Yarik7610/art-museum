import { render, screen } from "@testing-library/react"
import { Footer } from "../components/Footer"

test("renders footer with logo images", () => {
  render(<Footer />)

  const logoImage = screen.getByAltText("Museum of art")
  const modsenImage = screen.getByAltText("Modsen")

  expect(logoImage).toBeInTheDocument()
  expect(modsenImage).toBeInTheDocument()
})
