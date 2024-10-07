import bookmarkOrange from "#assets/bookmark-orange.svg"

export const Favourites = () => {
  return (
    <h1 className="big-heading">
      Here Are Your{" "}
      <p>
        <img src={bookmarkOrange} alt="Bookmark icon"></img> Favourites
      </p>
    </h1>
  )
}
