import burger from "#assets/burger.svg"
import cross from "#assets/cross.svg"
import logo from "#assets/logo.svg"
import { useEffect, useRef, useState } from "react"
import { useOutsideClick } from "../utils/useOutsideClick"
import { HeaderLinks } from "./HeaderLinks"

export const Header = () => {
  const [open, setOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (open) document.body.classList.add("active")
    else document.body.classList.remove("active")
    return () => {
      document.body.classList.remove("active")
    }
  }, [open])

  useOutsideClick(mobileMenuRef, () => setOpen(false))

  return (
    <header>
      <div className="header__content">
        <img src={logo} alt="Museum of art" />
        <nav className="header__nav">
          <div className="header__nav__desktop-ul">
            <HeaderLinks />
          </div>
          <button onClick={() => setOpen(true)} className="burger-btn">
            <img src={burger} alt="Burger icon"></img>
          </button>
          <div ref={mobileMenuRef} className={`header__nav__mobile ${open ? "active" : ""}`}>
            <button className="cross-btn" onClick={() => setOpen(false)}>
              <img src={cross} alt="Cross icon"></img>
            </button>{" "}
            <HeaderLinks />
          </div>
        </nav>
      </div>
    </header>
  )
}
