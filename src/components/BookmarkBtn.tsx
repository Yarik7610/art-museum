import bookmark from "#assets/bookmark.svg"
import crossOrange from "#assets/cross-orange.svg"
import { useState } from "react"

interface BookmarkBtnProps {
  id: number
}

export const BookmarkBtn: React.FC<BookmarkBtnProps> = ({ id }) => {
  const [added, setAdded] = useState(false)
  return (
    <button className="bookmark-btn" onClick={() => setAdded(!added)}>
      <img src={added ? crossOrange : bookmark} alt="Bookmark/Delete bookmark icon"></img>
    </button>
  )
}
