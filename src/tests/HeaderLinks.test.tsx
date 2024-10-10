import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { HeaderLinks } from "../components/HeaderLinks"

test("renders header links with Home and Your favourites", () => {
  render(
    <BrowserRouter>
      <HeaderLinks />
    </BrowserRouter>
  )

  const homeLink = screen.getByText(/Home/i)
  const favouritesLink = screen.getByText(/Your favourites/i)

  expect(homeLink).toBeInTheDocument()
  expect(favouritesLink).toBeInTheDocument()
})
