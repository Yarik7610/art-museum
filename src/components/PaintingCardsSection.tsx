import { Painting } from "../pages/Home"
import { Loader } from "./Loader"
import { Pagination } from "./Pagination"

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
      {/* <section className="painting-cards__section">
        {paintings.map((p) => (
          <PaintingCard />
        ))}
      </section> */}
      <Loader />
      <Pagination totalPaintingsCount={totalPaintingsCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}
