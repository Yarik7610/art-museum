import { IMAGE_FORMAT, IMAGE_PATH } from "../constans/constants"
import { ExtendedPainting } from "../pages/Painting"
import { BookmarkBtn } from "./BookmarkBtn"

interface PaintingSectionProps {
  painting: ExtendedPainting | null
  error: boolean
}

export const PaintingSection = ({ painting, error }: PaintingSectionProps) => {
  if (error) throw new Error("Error fetching painting")
  if (!painting) return <p className="middle-message">No such painting found</p>

  return (
    <section className="painting">
      <div className="painting__image">
        <img className="painting__image__img" src={IMAGE_PATH + painting.image_id + IMAGE_FORMAT} alt="Painting"></img>
        <BookmarkBtn id={painting.id} />
      </div>
      <article className="painting__article">
        <div className="painting__article__main">
          <h2>{painting.title}</h2>
          <h3>{painting.artist_display}</h3>
          <p>
            {painting.date_start} {painting.date_start && "-"} {painting.date_end}
          </p>
        </div>
        <div className="painting__article__info">
          <h2>Overview</h2>
          <ul>
            <li>
              <span>Place of origin</span>: {painting.place_of_origin}
            </li>
            <li>
              <span>Dimensions sheet</span>: {painting.dimensions}
            </li>
            <li>
              <span>Credit Line</span>: {painting.credit_line}
            </li>
            <li>
              <span>Medium display</span>: {painting.medium_display}
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
