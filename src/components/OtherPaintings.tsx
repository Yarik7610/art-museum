import { Painting } from "../pages/Home"
import { Loader } from "./Loader"

interface OtherPaintingsProps {
  otherPaintings: Painting[]
}
export const OtherPaintings: React.FC<OtherPaintingsProps> = ({ otherPaintings }) => {
  return (
    // <section className="other-paintings">
    //   {otherPaintings.map((p) => (
    //     <PaintingShortInfo withImg={true} />
    //   ))}
    // </section>
    <Loader />
  )
}
