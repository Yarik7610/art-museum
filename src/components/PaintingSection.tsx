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
          <h2>Charles V, bust length, holding a sword, facing right</h2>
          <h3>Giovanni Britto</h3>
          <p>1535–45</p>
        </div>
        <div className="painting__article__info">
          <h2>Overview</h2>
          <ul>
            <li>
              <span>Artist nationality</span>: German
            </li>
            <li>
              <span>Dimensions sheet</span>: 19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)
            </li>
            <li>
              <span>Credit Line</span>: Rogers Fund, 1917
            </li>
            <li>
              <span>Repository</span>: Metropolitan Museum of Art, New York, NY
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
