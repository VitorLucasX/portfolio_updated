import './App.css'
import About from './Components/About Section/About'
import Contact from './Components/Contact Section/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import ProjectsSection from './Components/Projects Section/Projects'
import SkillsSection from './Components/Skills Section/Skills'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <SkillsSection/>
    <ProjectsSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
