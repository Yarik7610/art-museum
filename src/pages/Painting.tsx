import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ErrorBoundary from "../components/ErrorBoundary"
import { Loader } from "../components/Loader"
import { PaintingSection } from "../components/PaintingSection"
import type { Painting as IPainting } from "./Home"

export type ExtendedPainting = IPainting & {
  credit_line: string
  place_of_origin: string
  dimensions: string
  medium_display: string
}

export const Painting = () => {
  const { paintingId } = useParams()
  const [painting, setPainting] = useState<ExtendedPainting | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPainting = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/${paintingId}?fields=id,title,artist_display,date_start,date_end,image_id,credit_line,place_of_origin,dimensions,medium_display`
        )
        const body = await response.json()
        if (!body.data) {
          setError(true)
        }
        setPainting(body.data as ExtendedPainting)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPainting()
  }, [paintingId])

  if (loading) return <Loader />

  return (
    <ErrorBoundary>
      <PaintingSection painting={painting} error={error} />
    </ErrorBoundary>
  )
}
