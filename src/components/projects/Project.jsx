import ProjectCard from './ProjectCard/ProjectCard'
import './project.scss'

export default function Project() {
  return (
    <section className='project'>
        <h1 className='title'>Project</h1>


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
        feature="post,share,like,subscribe,image upload"
        timestamp="continue.."
        projectLink="https://react-blog-iota-amber.vercel.app/"
      />
    </section>
  )
}
