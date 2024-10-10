import { Painting } from "../pages/Home"
import { PaintingShortInfo } from "./PaintingShortInfo"

interface FavouritesPaintingsSectionProps {
  paintings: Painting[]
}

export const FavouritesPaintingsSection = ({ paintings }: FavouritesPaintingsSectionProps) => {
  return (
    <section>
      {paintings.map((p) => (
        <PaintingShortInfo withImg={true} painting={p} key={p.id} />
      ))}
    </section>
  )
}
