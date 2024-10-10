import { Link } from "react-router-dom"
import { IMAGE_FORMAT, IMAGE_PATH } from "../constans/constants"
import { Painting } from "../pages/Home"
import { PaintingShortInfo } from "./PaintingShortInfo"

export const PaintingCard = (painting: Painting) => {
  return (
    <article className="painting-card">
      <Link to={`/painting/${painting.id}`}>
        <img
          className="painting-card__image"
          src={IMAGE_PATH + painting.image_id + IMAGE_FORMAT}
          alt={`${painting.image_id ? "Painting" : "No image"}`}></img>
      </Link>
      <div className="painting-card__short-info-wrap">
        <PaintingShortInfo withImg={false} painting={painting} />
      </div>
    </article>
  )
}
