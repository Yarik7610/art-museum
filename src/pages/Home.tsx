import { useState } from "react"
import { OtherPaintings } from "../components/OtherPaintings"
import { PaintingCardSection } from "../components/PaintingCardsSection"
import { Search } from "../components/Search"
import { SectionHeading } from "../components/SectionHeading"

export interface Painting {
  type: string
}
export const Home = () => {
  const [query, setQuery] = useState("")
  const [paintings, setPaintings] = useState<Painting[]>([])
  const [otherPaintings, setOtherPaintings] = useState<Painting[]>([])
  const [currentPage, setCurrentPage] = useState(1)

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
          totalPaintingsCount={5}
          paintings={[{ type: "Public" }, { type: "Public" }, { type: "Public" }]}
        />
      </section>
      <section className="home-section">
        <SectionHeading text1="Here some more" text2="Other works for you" />
        <OtherPaintings
          otherPaintings={[
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" },
            { type: "Public" }
          ]}
        />
      </section>
    </>
  )
}
