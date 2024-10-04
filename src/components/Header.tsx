import bookmark from "../assets/bookmark.svg"
import home from "../assets/home.svg"
import logo from "../assets/logo.svg"
export const Header = () => {
  return (
    <header>
      <div className="header__content">
        <img src={logo} />
        <nav className="header__nav">
          <ul>
            <li>
              <img src={home} />
              <span>Home</span>
            </li>
            <li>
              <img src={bookmark} />
              <span>Your favourites</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
