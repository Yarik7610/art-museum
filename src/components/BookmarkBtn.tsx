import { useState } from "react"
import bookmark from "../assets/bookmark.svg"
import crossOrange from "../assets/cross-orange.svg"
import { useFavouritePaintingsContext } from "../contexts/FavouritePaintingsContext"

interface BookmarkBtnProps {
  id: number
}

export const BookmarkBtn = ({ id }: BookmarkBtnProps) => {
  const { addPaintingId, removePaintingId, hasId } = useFavouritePaintingsContext()
  const [added, setAdded] = useState(hasId(id))

  const handleClick = () => {
    if (added) {
      removePaintingId(id)
      setAdded(false)
    } else {
      addPaintingId(id)
      setAdded(true)
    }
  }

  return (
    <button className="bookmark-btn" onClick={handleClick}>
      <img src={added ? crossOrange : bookmark} alt="Bookmark/Delete bookmark icon"></img>
    </button>
  )
}
