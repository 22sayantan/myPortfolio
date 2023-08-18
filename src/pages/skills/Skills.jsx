import { useState } from 'react';
import './skills.scss'

function Skills() {

  const [navtoggle,setNavtoggle] = useState(1);

  const NavIndex = (index) => {
    setNavtoggle(index);
  }

  const Tech_skills = ['Data Analytics ( Python , MS-Excel)','Front End ( HTML5, CSS3, JavaScript, React.js, SASS )','Back End ( Node.js, Express.js )','DataBase ( MySQL,Mongodb)','Version Control ( Git, Github )', 'Programming languages( C , C++)'];
  
  const soft_skills = ['time managment','interpersonal skill', 'leadership','team player','communication'];

    return (
      <>
        <section className="skills" id="skills">
          <h1 className='title'>Skills</h1>

          <nav className="skill_nav">
            <ul>
              <li
                className={navtoggle === 1? 'active': ''}
                onClick={()=>{NavIndex(1)}}
              >
                    technical
              </li>

              <li
                className={navtoggle === 2? 'active': ''}
                onClick={()=>{NavIndex(2)}}
              >
                    soft Skill
              </li>
            </ul>
          </nav>

          <div className='container'>
            <div
             className={ (navtoggle === 1) ? "tech" : "hideContent" }
            >
              <ul>
                {Tech_skills.map((e) =>
                    <li key={e}>{e}</li>
                    )}
              </ul>
            </div>

            <div
             className={ (navtoggle === 2) ? "soft" : "hideContent" }
            >
              <ul>
                {soft_skills.map((e) =>
                    <li key={e}>{e}</li>
                    )}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}

export default Skills;