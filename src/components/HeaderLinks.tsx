import bookmark from "#assets/bookmark.svg"
import home from "#assets/home.svg"
import { Link } from "react-router-dom"

export const HeaderLinks = () => {
  return (
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
  )
}
