import { useEffect, useState } from "react"
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
  const [totalPaintingsCount, setTotalPaintingsCount] = useState(0)
  const [paintingsLoading, setPaintingsLoading] = useState(true)
  const [otherPaintingsLoading, setOtherPaintingsLoading] = useState(true)

  useEffect(() => {
    const fetchPaintings = async () => {
      setPaintingsLoading(true)
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_display,date_start,date_end,image_id&limit=${PAGE_SIZE}&page=${currentPage}`
        )
        const body = await response.json()
        setTotalPaintingsCount(body.pagination.total)
        setPaintings(body.data as Painting[])
        setPaintingsLoading(false)
      } catch (e) {
        throw e
      }
    }
    fetchPaintings()
  }, [currentPage, query])

  useEffect(() => {
    setOtherPaintingsLoading(true)
    const randomPage = Math.floor(Math.random() * 10000)
    const fetchOtherPaintings = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_start,date_end,image_id&limit=${OTHER_PAINTINGS_COUNT}&page=${randomPage}`
        )
        const body = await response.json()
        setOtherPaintings(body.data as Painting[])
        setOtherPaintingsLoading(false)
      } catch (e) {
        throw e
      }
    }
    fetchOtherPaintings()
  }, [])

  return (
    <>
      <h1 className="big-heading">
        Let's find some <span className="">Art</span> here!
      </h1>
      <Search query={query} setQuery={setQuery} />
      <section className="home-section">
        <SectionHeading text1="Topics for you" text2="Our special gallery" />
        <PaintingCardSection
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPaintingsCount={totalPaintingsCount}
          paintings={paintings}
          paintingsLoading={paintingsLoading}
        />
      </section>
      <section className="home-section">
        <SectionHeading text1="Here some more" text2="Other works for you" />
        {otherPaintingsLoading ? <Loader /> : <OtherPaintings otherPaintings={otherPaintings} />}
      </section>
    </>
  )
}
