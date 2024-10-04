import logo from "../assets/logo.svg"
export const Header = () => {
  return (
    <header>
      <div className="header__content">
        <img src={logo} />
        <nav className="header__nav">
          <ul>
            <li>Home</li>
            <li>Your favourites</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
