import './App.css'
import Academic from './pages/academic/Academic'
import Contact from './pages/contact/Contact'
import Intro from './pages/introduction/Intro'
import Project from './pages/projects/Project'
import Skills from './pages/skills/Skills'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className="App">
          <Navbar/>           
          <Intro/>           
          <Academic/>
          <Skills/>
          <Project/>           
          <Contact/>
      </div>
    </>
  )
}

export default App
