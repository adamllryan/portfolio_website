import { React } from 'react'
import ProjectCard from './ProjectCard'

const ProjectsPanel = ( {projects, experience, classes} ) => {

  return (
    <> 
        <h1 className='project__title'>
            Projects
        </h1>
        {
            projects.length>0?
                projects.sort((a, b) => {return new Date(b.created_at)-new Date(a.created_at)}).map((project, index) => {
                return <ProjectCard key={index} projectData={project} className="project__card"/>
                })
            :
                <div>Failed to fetch repos, you may be rate limited by Github. All projects can be viewed at <a className='underline' href='https://www.github.com/adamllryan'>github.com/adamllryan</a>. </div>
        }
    </>
  )
}

export default ProjectsPanel
