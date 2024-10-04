import fon from "../assets/fon.png"
import { BookmarkBtn } from "./BookmarkBtn"
export const PaintingArticle = () => {
  return (
    <article className="painting-article">
      <img className="painting-article__image" src={fon} alt="Painting image"></img>
      <div>
        <p className="painting-article__name">Charles V, bust length dadadad</p>
        <p className="painting-article__author">Giovanni Britto</p>
        <p className="painting-article__status">Public</p>
      </div>
      <BookmarkBtn />
    </article>
  )
}
