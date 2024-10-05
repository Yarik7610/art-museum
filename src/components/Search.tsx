import search from "#assets/search.svg"

interface SearchProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}
export const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="search">
      <input
        value={query}
        onChange={handleOnChange}
        className="search__input"
        type="text"
        placeholder="Search Art, Artist, Work..."
      />
      <img src={search} alt="Search icon" />
    </div>
  )
}
