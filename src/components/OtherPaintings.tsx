import { Painting } from "../pages/Home"
import { PaintingShortInfo } from "./PaintingShortInfo"

interface OtherPaintingsProps {
  otherPaintings: Painting[]
}
export const OtherPaintings = ({ otherPaintings }: OtherPaintingsProps) => {
  return (
    <section className="other-paintings">
      {otherPaintings.map((p) => (
        <PaintingShortInfo withImg={true} painting={p} key={p.id} />
      ))}
    </section>
  )
}
