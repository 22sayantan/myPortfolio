/* eslint-disable react/prop-types */
import './projectCard.scss'

const ProjectCard = ({title,tech,feature,timestamp,projectLink}) => {
  return (
    <>
      <div className='projectCard'>
        <div className="projectImg">
          {/* <img src="" alt="" /> */}
        </div>

        <div className="projectDetails">
          <h1>{title} <a href={projectLink}><i className="fa-solid fa-arrow-up-right-from-square"></i></a></h1>
          <h3>{tech}</h3>
          <h4>{feature}</h4>
          <h6>{timestamp}</h6>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;
