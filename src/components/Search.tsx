import search from "#assets/search.svg"
import { useCallback, useState } from "react"
import { debounce } from "../utils/debounce"

interface SearchProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}
export const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const [value, setValue] = useState("")

  const debouncedSetQuery = useCallback(
    debounce((query: string) => setQuery(query), 400),
    []
  )

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debouncedSetQuery(e.target.value)
  }

  return (
    <div className="search">
      <input
        value={value}
        onChange={handleOnChange}
        className="search__input"
        type="text"
        placeholder="Search Art, Artist, Work..."
      />
      <img src={search} alt="Search icon" />
    </div>
  )
}
