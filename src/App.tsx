import { Outlet } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main__content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
