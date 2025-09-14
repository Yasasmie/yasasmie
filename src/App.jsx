import NavBar from "../src/Components/NavBar"
import Home from "../src/Components/Home"
import About from "../src/Components/About"
import Experience from "../src/Components/Experience"
import Projects from "../src/Components/Projects"
import Skills from "../src/Components/Skills"
import Education from "../src/Components/Education"
import Contact from "../src/Components/Contact"
import Footer from "../src/Components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div>
      <NavBar />
      <Home />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
