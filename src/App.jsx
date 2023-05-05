import './App.css'
import Academic from './components/academic/Academic'
import Contact from './components/contact/Contact'
import Intro from './components/introduction/intro'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'
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
