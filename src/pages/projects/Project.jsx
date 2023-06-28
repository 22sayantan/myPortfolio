import {useState} from 'react'
import ProjectCard from './ProjectCard/ProjectCard';
// import ProjectData from './ProjectData/ProjectData';
import './project.scss'

export default function Project() {
  const [toggle,setToggle] = useState(1);

  const NavIndex = (index) =>{
    setToggle(index);
  }

  return (
    <section className='project' id='project'>
        <h1 className='title'>Projects</h1>

        <nav className="skill_nav">
            <ul>
              <li
                className={toggle === 1? 'active': ''}
                onClick={()=>{NavIndex(1)}}
              >
                all
              </li>

              <li
                className={toggle === 2? 'active': ''}
                onClick={()=>{NavIndex(2)}}
              >
                javascript
              </li>

              <li
                className={toggle === 3? 'active': ''}
                onClick={()=>{NavIndex(3)}}
              >
                React.js
              </li>

              <li
                className={toggle === 4? 'active': ''}
                onClick={()=>{NavIndex(4)}}
              >
                Next.js
              </li>

              <li
                className={toggle === 5? 'active': ''}
                onClick={()=>{NavIndex(5)}}
              >
                machine learning
              </li>

              <li
                className={toggle === 6? 'active': ''}
                onClick={()=>{NavIndex(6)}}
              >
                web scrapping
              </li>
            </ul>
          </nav>

        <div className="content">
            <ProjectCard
            title="Youtube Clone"
            tech="HTML5, CSS3 , JavaScript"
            feature="video play pause, video list , account name, like subscibe history buttons"
            timestamp="Apr,2023"
            projectLink="https://22sayantan.github.io/YoutubeClone/"
          />

          <ProjectCard
            title="Blog App"
            tech="React, hooks, router "
            feature="hello this is my new project with blog app and a good ui it's amazing task to do as a beginner."
            timestamp="june,2023"
            projectLink="https://react-blog-iota-amber.vercel.app/"
          />
        </div>
    </section>
  )
}
