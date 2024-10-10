import { Painting } from "../pages/Home"
import { PaintingShortInfo } from "./PaintingShortInfo"

interface ShortPaitingsProps {
  paintings: Painting[]
  error: boolean
}

export const ShortPaitings = ({ paintings, error }: ShortPaitingsProps) => {
  if (error) throw new Error("Error fetching paintings")
  if (paintings.length === 0) return <p className="middle-message">No paintings yet</p>

  return (
    <section className="other-paintings">
      {paintings.map((p) => (
        <PaintingShortInfo withImg={true} painting={p} key={p.id} />
      ))}
    </section>
  )
}
