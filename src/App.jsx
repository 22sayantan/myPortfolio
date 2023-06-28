import './App.css'
import Academic from './pages/academic/Academic'
import Contact from './pages/contact/Contact'
import Intro from './pages/introduction/Intro'
import Project from './pages/projects/Project'
import Skills from './pages/skills/Skills'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
          <Navbar/>           
          <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/academic' element={<Academic/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
