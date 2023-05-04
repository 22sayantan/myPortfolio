import './App.css'
import Academic from './components/academic/Academic'
import Contact from './components/contact/Contact'
import Header from './components/header/header'
import Intro from './components/introduction/intro'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <div className="App">
          <Header/>
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
