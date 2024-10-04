import { Link } from "react-router-dom"
import bookmark from "../assets/bookmark.svg"
import home from "../assets/home.svg"
import logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <header>
      <div className="header__content">
        <img src={logo} alt="Museum of art" />
        <nav className="header__nav">
          <ul>
            <Link to="/">
              <li>
                <img src={home} alt="Home icon" />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/favourites">
              <li>
                <img src={bookmark} alt="Bookmark icon" />
                <span>Your favourites</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
