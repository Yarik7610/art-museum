import { Painting } from "../pages/Home"
import { PaintingShortInfo } from "./PaintingShortInfo"

interface OtherPaintingsProps {
  otherPaintings: Painting[]
  otherPaintingsError: boolean
}
export const OtherPaintings = ({ otherPaintings, otherPaintingsError }: OtherPaintingsProps) => {
  if (otherPaintingsError) throw new Error("Can't render other paintings")

  return (
    <section className="other-paintings">
      {otherPaintings.map((p) => (
        <PaintingShortInfo withImg={true} painting={p} key={p.id} />
      ))}
    </section>
  )
}
