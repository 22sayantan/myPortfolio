/* eslint-disable react/prop-types */
import "./projectCard.scss";

const ProjectCard = ({ title, tech, feature, timestamp, projectLink }) => {
  return (
    <>
      <div className="projectCard">

        <div className="projectDetails">
          <h2>{title} </h2>
          <h3>{`[ ${tech} ]`}</h3>
          <h4>{feature}</h4>
          <h6>{`[ ${timestamp} ]`}</h6>
          <div className="linkBtn">
            <a href={projectLink}>
              <button>GitHub</button>
            </a>
            <a href={projectLink}>
              <button>Live</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
