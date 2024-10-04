import fon from "../assets/fon.png"
import { BookmarkBtn } from "./BookmarkBtn"

interface PaintingShortInfoProps {
  withImg: boolean
}
export const PaintingShortInfo: React.FC<PaintingShortInfoProps> = ({ withImg }) => {
  return (
    <article className={`painting-short-info ${!withImg ? "short" : ""}`}>
      {withImg && <img className="painting-short-info__image" src={fon} alt="Painting image"></img>}
      <div>
        <p className="painting-short-info__name">Charles V, bust length dadadad</p>
        <p className="painting-short-info__author">Giovanni Britto</p>
        <p className="painting-short-info__status">Public</p>
      </div>
      <BookmarkBtn />
    </article>
  )
}
