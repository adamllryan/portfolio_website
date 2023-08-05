import React from 'react'
import Project from './Project'
const ProjectsPanel = ( {projects} ) => {
  return (
    <div> (Sorted by latest modified)
        {
            projects.sort((a, b) => {return new Date(b.updated_at)-new Date(a.updated_at)}).map((project, index) => {
                return <Project key={index} projectData={project} />
            })
        }
    </div>
  )
}

export default ProjectsPanel