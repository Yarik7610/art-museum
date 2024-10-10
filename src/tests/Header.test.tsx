import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header"

test("toggles mobile menu on burger and cross icon click", () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const burgerBtn = container.querySelector(".burger-btn")!

  const mobileMenu = container.querySelector(".header__nav__mobile")
  expect(mobileMenu).not.toHaveClass("active")

  fireEvent.click(burgerBtn)
  expect(mobileMenu).toHaveClass("active")

  const crossBtn = container.querySelector(".cross-btn")!
  fireEvent.click(crossBtn)

  expect(mobileMenu).not.toHaveClass("active")
})
