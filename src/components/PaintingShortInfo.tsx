import { Link } from "react-router-dom"
import { IMAGE_FORMAT, IMAGE_PATH } from "../constans/constants"
import { Painting } from "../pages/Home"
import { BookmarkBtn } from "./BookmarkBtn"

interface PaintingShortInfoProps {
  withImg: boolean
  painting: Painting
}

export const PaintingShortInfo = ({ withImg, painting }: PaintingShortInfoProps) => {
  return (
    <article className={`painting-short-info ${!withImg ? "short" : ""}`}>
      {withImg && (
        <Link to={`/painting/${painting.id}`}>
          <img
            className="painting-short-info__image"
            src={IMAGE_PATH + painting.image_id + IMAGE_FORMAT}
            alt={`${painting.image_id ? "Painting" : "No image"}`}></img>
        </Link>
      )}
      <div>
        <p className="painting-short-info__name">{painting.title}</p>
        <p className="painting-short-info__author">{painting.artist_display}</p>
        <p className="painting-short-info__status">
          {painting.date_start} {painting.date_start && "-"} {painting.date_end}
        </p>
      </div>
      <BookmarkBtn id={painting.id} />
    </article>
  )
}
