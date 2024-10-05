import { Painting } from "../pages/Home"
import { Pagination } from "./Pagination"
import { PaintingCard } from "./PaintingCard"

interface PaintingsCardSectionProps {
  paintings: Painting[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPaintingsCount: number
}
export const PaintingCardSection: React.FC<PaintingsCardSectionProps> = ({
  paintings,
  currentPage,
  setCurrentPage,
  totalPaintingsCount
}) => {
  return (
    <div className="painting-cards">
      <section className="painting-cards__section">
        {paintings.map((p) => (
          <PaintingCard />
        ))}
      </section>
      <Pagination totalPaintingsCount={totalPaintingsCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}
