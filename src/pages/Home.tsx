import { useEffect, useState } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import { Loader } from "../components/Loader"
import { PaintingCardSection } from "../components/PaintingCardsSection"
import { Search } from "../components/Search"
import { SectionHeading } from "../components/SectionHeading"
import { ShortPaitings } from "../components/ShortPaintings"
import { OTHER_PAINTINGS_COUNT, PAGE_SIZE, RANDOM_PAGE_WITH_SIZE_NINE } from "../constans/constants"

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
    const randomPage = Math.floor(Math.random() * RANDOM_PAGE_WITH_SIZE_NINE)
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
  }, [])

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
            <ShortPaitings paintings={otherPaintings} error={otherPaintingsError} />
          )}
        </ErrorBoundary>
      </section>
    </>
  )
}
