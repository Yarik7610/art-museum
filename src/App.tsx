import { useState } from "react"
import { Outlet } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
