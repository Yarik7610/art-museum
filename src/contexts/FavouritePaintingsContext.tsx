import { createContext, useContext } from "react"

interface ContextValues {
  getPaintingsIds: () => number[]
  addPaintingId: (id: number) => void
  removePaintingId: (id: number) => void
  hasId: (id: number) => boolean
}

const FavouritePaintingsContext = createContext<ContextValues | null>(null)

export const FavouritePaintingsProvider = ({ children }: { children: React.ReactNode }) => {
  const getPaintingsIds: ContextValues["getPaintingsIds"] = () => {
    return JSON.parse(localStorage.getItem("ids") ?? "[]")
  }

  const addPaintingId: ContextValues["addPaintingId"] = (id) => {
    const paintingsIds = getPaintingsIds()
    if (paintingsIds.includes(id)) return
    else paintingsIds.push(id)
    localStorage.setItem("ids", JSON.stringify(paintingsIds))
  }

  const removePaintingId: ContextValues["removePaintingId"] = (id) => {
    const paintingsIds = getPaintingsIds()
    const filteredPaitingsIds = paintingsIds.filter((i) => i !== id)
    localStorage.setItem("ids", JSON.stringify(filteredPaitingsIds))
  }

  const hasId: ContextValues["hasId"] = (id) => {
    const paintingsIds = getPaintingsIds()
    if (paintingsIds.includes(id)) return true
    return false
  }

  return (
    <FavouritePaintingsContext.Provider value={{ getPaintingsIds, addPaintingId, removePaintingId, hasId }}>
      {children}
    </FavouritePaintingsContext.Provider>
  )
}

export const useFavouritePaintingsContext = () => useContext(FavouritePaintingsContext)!
