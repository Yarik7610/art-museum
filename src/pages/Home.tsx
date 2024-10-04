import { useState } from "react"
import { PaintingCardSection } from "../components/PaintingCardsSection"
import { Search } from "../components/Search"
import { SectionHeading } from "../components/SectionHeading"

export interface Painting {
  type: string
}
export const Home = () => {
  const [query, setQuery] = useState("")
  const [paintings, setPaintings] = useState<Painting[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <h1 className="big-heading">
        Let's find some <span className="">Art</span> here!
      </h1>
      <Search query={query} setQuery={setQuery} />
      <SectionHeading text1="Topics for you" text2="Our special gallery" />
      <PaintingCardSection
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPaintingsCount={5}
        paintings={[{ type: "Public" }, { type: "Public" }, { type: "Public" }]}
      />
      <SectionHeading text1="Here some more" text2="Other works for you" />
    </>
  )
}
