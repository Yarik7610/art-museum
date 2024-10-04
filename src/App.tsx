import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PaintingCard } from "./components/PaintingCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <PaintingCard />
      </main>
      <Footer />
    </>
  )
}

export default App
