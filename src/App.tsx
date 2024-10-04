import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PaintingArticle } from "./components/PaintingArticle"

function App() {
  return (
    <>
      <Header />
      <main>
        <PaintingArticle />
      </main>
      <Footer />
    </>
  )
}

export default App
