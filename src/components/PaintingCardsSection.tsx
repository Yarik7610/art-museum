import { Painting } from "../pages/Home"
import { Loader } from "./Loader"
import { Pagination } from "./Pagination"
import { PaintingCard } from "./PaintingCard"

interface PaintingsCardSectionProps {
  paintings: Painting[]
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPaintingsCount: number
  paintingsLoading: boolean
  paintingsError: boolean
}
export const PaintingCardSection = ({
  paintings,
  currentPage,
  setCurrentPage,
  totalPaintingsCount,
  paintingsLoading,
  paintingsError
}: PaintingsCardSectionProps) => {
  if (paintingsError) throw new Error("Can't render paintings")

  if (!paintingsLoading && totalPaintingsCount === 0) return <p className="middle-message">No such paintings found</p>

  return (
    <div className="painting-cards">
      {paintingsLoading ? (
        <Loader />
      ) : (
        <section className="painting-cards__section">
          {paintings.map((p) => (
            <PaintingCard {...p} key={p.id} />
          ))}
        </section>
      )}
      {!paintingsLoading && (
        <Pagination
          totalPaintingsCount={totalPaintingsCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  )
}
