import { useEffect, useState } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import { Loader } from "../components/Loader"
import { OtherPaintings } from "../components/OtherPaintings"
import { PaintingCardSection } from "../components/PaintingCardsSection"
import { Search } from "../components/Search"
import { SectionHeading } from "../components/SectionHeading"
import { OTHER_PAINTINGS_COUNT, PAGE_SIZE } from "../constans/constants"

export interface Painting {
  artist_display: string
  date_end: number
  date_start: number
  id: number
  image_id: string
  title: string
}

export const Home = () => {
  const [query, setQuery] = useState("")
  const [paintings, setPaintings] = useState<Painting[]>([])
  const [otherPaintings, setOtherPaintings] = useState<Painting[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPaintingsPages, setTotalPaintingsPages] = useState(0)
  const [paintingsLoading, setPaintingsLoading] = useState(true)
  const [otherPaintingsLoading, setOtherPaintingsLoading] = useState(true)
  const [paintingsError, setPaintingsError] = useState(false)
  const [otherPaintingsError, setOtherPaintingsError] = useState(false)

  useEffect(() => {
    const fetchPaintings = async () => {
      setPaintingsLoading(true)
      setPaintingsError(false)
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_display,date_start,date_end,image_id&limit=${PAGE_SIZE}&page=${currentPage}`
        )
        const body = await response.json()
        setTotalPaintingsPages(body.pagination.total_pages)
        setPaintings(body.data as Painting[])
      } catch {
        setPaintingsError(true)
      } finally {
        setPaintingsLoading(false)
      }
    }
    fetchPaintings()
  }, [currentPage, query])

  useEffect(() => {
    setOtherPaintingsLoading(true)
    setOtherPaintingsError(false)
    if (!totalPaintingsPages) return
    //divide on 3 because other paintings count = 9 that is 3 time bigger than PAGE_SIZE
    const randomPage = Math.floor((Math.random() * totalPaintingsPages) / 3)
    const fetchOtherPaintings = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_start,date_end,image_id&limit=${OTHER_PAINTINGS_COUNT}&page=${randomPage}`
        )
        const body = await response.json()
        setOtherPaintings(body.data as Painting[])
      } catch {
        setOtherPaintingsError(true)
      } finally {
        setOtherPaintingsLoading(false)
      }
    }
    fetchOtherPaintings()
  }, [totalPaintingsPages])

  return (
    <>
      <h1 className="big-heading">
        Let&apos;s find some <span>Art</span> here!
      </h1>
      <Search setQuery={setQuery} />
      <section className="home-section">
        <SectionHeading text1="Topics for you" text2="Our special gallery" />
        <ErrorBoundary>
          <PaintingCardSection
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPaintingsPages={totalPaintingsPages}
            paintings={paintings}
            paintingsLoading={paintingsLoading}
            paintingsError={paintingsError}
          />
        </ErrorBoundary>
      </section>
      <section className="home-section">
        <SectionHeading text1="Here some more" text2="Other works for you" />
        <ErrorBoundary>
          {otherPaintingsLoading ? (
            <Loader />
          ) : (
            <OtherPaintings otherPaintings={otherPaintings} otherPaintingsError={otherPaintingsError} />
          )}
        </ErrorBoundary>
      </section>
    </>
  )
}
