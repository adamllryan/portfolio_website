import { React } from 'react'
import ProjectCard from './ProjectCard'

const ProjectsPanel = ( {projects, experience, classes} ) => {
  let panel = 'project'

  return (
    <div className='w-screen max-w-4xl shadow-xl rounded-md bg-slate-100 border-slate-200 border-2'> 
        <div className='text-center text-lg p-2 m-2 underline decoration-indigo-400'>
            Projects
        </div>
        <div className='flex flex-wrap flex-stretch rounded-xl'>
            {
                panel!=='project'?null:(
                projects.length>0?
                    projects.sort((a, b) => {return new Date(b.created_at)-new Date(a.created_at)}).map((project, index) => {
                    return <ProjectCard key={index} projectData={project} />
                    })
                :
                    <div className='p-4 text-center text-xs'>Failed to fetch repos, you may be rate limited by Github. All projects can be viewed at <a className='underline' href='https://www.github.com/adamllryan'>github.com/adamllryan</a>. </div>
                )
            }
        </div>
    </div>
  )
}

export default ProjectsPanel