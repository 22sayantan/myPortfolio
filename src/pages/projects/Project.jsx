import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjHeaderList, ProjList } from "./ProjectData/ProjectData";
import "./project.scss";

export default function Project() {
  const [toggle, setToggle] = useState(1);

  const NavIndex = (index) => {
    setToggle(index);
  };

  return (
    <>
      <section className="project" id="project">
        <h1 className="title">Projects</h1>
        <div className="projectContent">
          <nav className="skill_nav">
            <ul>
              {ProjHeaderList.map((item) => {
                return (
                  <li
                    className={toggle === item.id ? "active" : ""}
                    onClick={() => {
                      NavIndex(item.id);
                    }}
                    key={item.id}
                  >
                    {`${item.item}`}
                  </li>
                );
              })}
            </ul>
            {/* {console.log(val)} */}
          </nav>

          <div className="content">
            {ProjHeaderList.map((item) => {
              if (item.id === toggle) {
                var filtered_arr = ProjList.filter(
                  (e) => e.category === item.item
                );
                return filtered_arr.map((item) => {
                  return (
                    <ProjectCard
                      key={item.id}
                      title={item.title}
                      tech={item.category}
                      timestamp="mm/yyyy"
                      projectLink="https://22sayantan.github.io/YoutubeClone/"
                    />
                  );
                });
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
