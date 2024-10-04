import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PaintingCard } from "./components/PaintingCard"
import { SectionHeading } from "./components/SectionHeading"

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionHeading text1="Topics for you" text2="Our special gallery" />
        <PaintingCard />
      </main>
      <Footer />
    </>
  )
}

export default App
