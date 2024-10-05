import { PAGE_SIZE } from "../constans/constants"

interface PaginationProps {
  totalPaintingsCount: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export const Pagination: React.FC<PaginationProps> = ({
  totalPaintingsCount,
  currentPage,
  setCurrentPage
}: PaginationProps) => {
  const pagesCount = Math.ceil(totalPaintingsCount / PAGE_SIZE)
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let slicedPages
  if (currentPage < 4) {
    slicedPages = pages.slice(0, 4)
  } else if (currentPage > pagesCount - 3) {
    slicedPages = pages.slice(pagesCount - 4, pagesCount)
  } else {
    slicedPages = pages.slice(currentPage - 2, currentPage + 2)
  }

  return (
    <div className="pagination">
      <button
        className="pagination__controller"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}>
        Prev
      </button>
      {slicedPages.map((page) => (
        <button
          key={page}
          onClick={() => {
            setCurrentPage(page)
          }}
          className={`pagination__btn ${page === currentPage ? "active" : ""}`}>
          {page}
        </button>
      ))}
      <button
        className="pagination__controller"
        disabled={currentPage === pagesCount}
        onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
    </div>
  )
}
