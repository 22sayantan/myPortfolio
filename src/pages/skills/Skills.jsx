import { useState } from "react";
import {Primary_Tech_skills,Secondary_Tech_skills,soft_skills} from './SkillsData'
import "./skills.scss";

function Skills() {
  const [navtoggle, setNavtoggle] = useState(1);
  const [techskills, setTechskills] = useState(1);

  const NavIndex = (index) => {
    setNavtoggle(index);
  };

  const TechSkillIndex = (index) => {
    setTechskills(index);
  };


  return (
    <>
      <section className="skills" id="skills">
        <h1 className="title">Skills</h1>

        <nav className="skill_nav">
          <ul>
            <li
              className={navtoggle === 1 ? "active" : ""}
              onClick={() => {
                NavIndex(1);
              }}
            >
              technical
            </li>

            <li
              className={navtoggle === 2 ? "active" : ""}
              onClick={() => {
                NavIndex(2);
              }}
            >
              soft Skill
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className={navtoggle === 1 ? "tech" : "hideContent"}>
            <nav className="tech_skill_nav skill_nav">
              <ul>
                <li
                  className={techskills === 1 ? "active" : ""}
                  onClick={() => {
                    TechSkillIndex(1);
                  }}
                >
                  Primary
                </li>

                <li
                  className={techskills === 2 ? "active" : ""}
                  onClick={() => {
                    TechSkillIndex(2);
                  }}
                >
                  Secondary
                </li>
              </ul>
            </nav>
            <div className="techContent">
              <div className={techskills === 1 ? "primary" : "hideContent"}>
                <ul>
                  {Primary_Tech_skills.map((e) => (
                    <li key={e.id}><img src={e.img} alt="no img" /><h4>{e.title}</h4></li>
                  ))}
                </ul>
              </div>
              <div className={techskills === 2 ? "secondary" : "hideContent"}>
                <ul>
                  {Secondary_Tech_skills.map((e) => (
                    <li key={e.id}><img src={e.img} alt="no img" /><h4>{e.title}</h4></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={navtoggle === 2 ? "soft" : "hideContent"}>
            <ul>
              {soft_skills.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
