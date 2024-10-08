import bookmarkOrange from "#assets/bookmark-orange.svg"
import { useEffect, useState } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import { Loader } from "../components/Loader"
import { SectionHeading } from "../components/SectionHeading"
import { ShortPaitings } from "../components/ShortPaintings"
import { useFavouritePaintingsContext } from "../contexts/FavouritePaintingsContext"
import { Painting } from "./Home"

export const Favourites = () => {
  const { getPaintingsIds } = useFavouritePaintingsContext()
  const paintingsIds = getPaintingsIds()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [paintings, setPaintings] = useState<Painting[]>([])

  useEffect(() => {
    const fetchPainting = async () => {
      setLoading(true)
      setError(false)
      const promises = paintingsIds.map(async (id) => {
        try {
          const response = await fetch(
            `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,date_start,date_end,image_id`
          )
          const body = await response.json()
          setPaintings((prev) => [...prev, body.data as Painting])
        } catch {
          setError(true)
        }
      })
      await Promise.all(promises)
      setLoading(false)
    }
    fetchPainting()
  }, [])

  return (
    <>
      <h1 className="big-heading">
        Here Are Your{" "}
        <p>
          <img src={bookmarkOrange} alt="Bookmark icon"></img>
          <span>Favourites</span>
        </p>
      </h1>{" "}
      <SectionHeading text1="Saved by you" text2="Your favourites list" />
      <ErrorBoundary>{loading ? <Loader /> : <ShortPaitings paintings={paintings} error={error} />}</ErrorBoundary>
    </>
  )
}
