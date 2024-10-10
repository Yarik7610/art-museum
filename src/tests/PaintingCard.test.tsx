import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { PaintingCard } from "../components/PaintingCard"
import { FavouritePaintingsProvider } from "../contexts/FavouritePaintingsContext"
import { Painting } from "../pages/Home"

const mockPainting: Painting = {
  id: 1,
  image_id: "mock-image-id",
  title: "Mock Painting Title",
  artist_display: "Mock Artist",
  date_start: 2000,
  date_end: 2020
}

test("renders painting card with image and short info", () => {
  render(
    <FavouritePaintingsProvider>
      <BrowserRouter>
        <PaintingCard {...mockPainting} />
      </BrowserRouter>
    </FavouritePaintingsProvider>
  )

  const image = screen.getByAltText("Painting")
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", expect.stringContaining("mock-image-id"))

  const title = screen.getByText("Mock Painting Title")
  const artist = screen.getByText("Mock Artist")
  const status = screen.getByText("2000 - 2020")

  expect(title).toBeInTheDocument()
  expect(artist).toBeInTheDocument()
  expect(status).toBeInTheDocument()
})
