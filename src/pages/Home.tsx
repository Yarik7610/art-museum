import { useState } from "react"
import { Search } from "../components/Search"
import { SectionHeading } from "../components/SectionHeading"

export const Home = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <h1 className="big-heading">
        Let's find some <span className="">Art</span> here!
      </h1>
      <Search query={query} setQuery={setQuery} />
      <SectionHeading text1="Topics for you" text2="Our special gallery" />
    </>
  )
}
