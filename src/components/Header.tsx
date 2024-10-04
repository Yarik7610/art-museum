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
            <li>
              <img src={home} alt="Home icon" />
              <span>Home</span>
            </li>
            <li>
              <img src={bookmark} alt="Bookmark icon" />
              <span>Your favourites</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
