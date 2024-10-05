import img from "#assets/fon.png"
import { PaintingShortInfo } from "./PaintingShortInfo"

export const PaintingCard = () => {
  return (
    <article className="painting-card">
      <img className="painting-card__image" src={img} alt="Painting" />
      <div className="painting-card__short-info-wrap">
        <PaintingShortInfo withImg={false} />
      </div>
    </article>
  )
}
