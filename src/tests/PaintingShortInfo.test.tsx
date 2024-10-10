import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { PaintingShortInfo } from "../components/PaintingShortInfo"
import { FavouritePaintingsProvider } from "../contexts/FavouritePaintingsContext"
import { Painting } from "../pages/Home"

const mockPainting: Painting = {
  id: 1,
  image_id: "12345",
  title: "Starry Night",
  artist_display: "Vincent van Gogh",
  date_start: 1889,
  date_end: 1992
}

test("renders painting short info with image", () => {
  render(
    <FavouritePaintingsProvider>
      <BrowserRouter>
        <PaintingShortInfo withImg={true} painting={mockPainting} />
      </BrowserRouter>
    </FavouritePaintingsProvider>
  )

  const image = screen.getByAltText("Painting")
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", expect.stringContaining("12345"))

  // Проверка названия и автора
  expect(screen.getByText(/Starry Night/i)).toBeInTheDocument()
  expect(screen.getByText(/Vincent van Gogh/i)).toBeInTheDocument()

  // Проверка статуса
  expect(screen.getByText(/1889/i)).toBeInTheDocument()

  // Проверка наличия кнопки закладки
  expect(screen.getByRole("button")).toBeInTheDocument()
})

test("renders painting short info without image", () => {
  render(
    <FavouritePaintingsProvider>
      <BrowserRouter>
        <PaintingShortInfo withImg={false} painting={mockPainting} />
      </BrowserRouter>
    </FavouritePaintingsProvider>
  )

  const image = screen.queryByAltText("Painting")
  expect(image).not.toBeInTheDocument()

  expect(screen.getByText(/Starry Night/i)).toBeInTheDocument()
  expect(screen.getByText(/Vincent van Gogh/i)).toBeInTheDocument()

  expect(screen.getByText(/1889/i)).toBeInTheDocument()

  expect(screen.getByRole("button")).toBeInTheDocument()
})
