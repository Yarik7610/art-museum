import { render, screen } from "@testing-library/react"
import { BookmarkBtn } from "../components/BookmarkBtn"
import { FavouritePaintingsProvider } from "../contexts/FavouritePaintingsContext"

test("renders bookmark button with bookmark icon when not added", () => {
  render(
    <FavouritePaintingsProvider>
      <BookmarkBtn id={1} />
    </FavouritePaintingsProvider>
  )

  const button = screen.getByRole("button")
  const icon = screen.getByAltText("Bookmark/Delete bookmark icon")

  expect(button).toBeInTheDocument()
  expect(icon).toBeInTheDocument()
})
