import { useState } from "react"
import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Pagination } from "./components/Pagination"

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      <Header />
      <main>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPaintingsCount={29} />
      </main>
      <Footer />
    </>
  )
}

export default App
