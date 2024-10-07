interface PaginationProps {
  totalPaintingsPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
export const Pagination: React.FC<PaginationProps> = ({
  totalPaintingsPages,
  currentPage,
  setCurrentPage
}: PaginationProps) => {
  const pages = []
  for (let i = 1; i <= totalPaintingsPages; i++) {
    pages.push(i)
  }

  let slicedPages
  if (currentPage < 4) {
    slicedPages = pages.slice(0, 4)
  } else if (currentPage > totalPaintingsPages - 3) {
    slicedPages = pages.slice(totalPaintingsPages - 4, totalPaintingsPages)
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
        disabled={currentPage === totalPaintingsPages}
        onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
    </div>
  )
}
