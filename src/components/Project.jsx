import {React, useState, useEffect} from 'react'
import Tags from './Tags'
import Topics from './Topics'
const Project = ( { projectData } ) => {
    let [tags, setTags] = useState([])
    useEffect(() => {
        const fetchTags = async () => {
            try {
                let res = await fetch(`https://api.github.com/repos/adamllryan/${projectData.name}/tags`)
                if (!res.ok) {
                    throw new Error(res.status)
                }
                setTags(await res.json())
            } catch (err) {
                console.log(err)
            }
        }
        fetchTags()
    }, [projectData.name])
    return (
        //title, description, start, end
      <div className='grid shadow-xl hover:shadow-2xl duration-300 hover:my-2.5 bg-slate-50  m-2 p-2 rounded-xl py-4 border-dashed divide-y-2'>
        <div className='flex items-baseline gap-2 pl-2 rounded-t-lg'>
            <a target='_blank' href={projectData.html_url}>
                {projectData.name}
            </a>
            <div className='text-xs shadow-xl'>
                {projectData.language? `(${projectData.language})` : null}
            </div>
            <div className='text-xs ml-auto pr-2'>
                {new Date(projectData.created_at).getFullYear()}
            </div>
        </div>
        <div className='text-center'>
            <div className='text-sm text-slate-600 py-2'>
                {projectData.description ? projectData.description : 'No Description. '}
            </div>
            <div className='flex items-center justify-center divide-x text-sm shadow-sm bg-blend-hard-light rounded-md'>
                <Tags tags={tags} />
                <Topics topics={projectData.topics}/> 
            </div>
        </div>
      </div>

    )
}

export default Project;
